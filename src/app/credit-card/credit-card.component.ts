import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, NgForm, NgModel, Validators } from '@angular/forms';
import EncryptService from '../service/encrypt.service';
import HttpService from '../service/http.service';



@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  successMessage: string;
  creditCardForm: FormGroup = new FormGroup({
    creditCardNumber: new FormControl('',[
      Validators.minLength(13),
      Validators.maxLength(16),
      (formControl)=>{
       if(formControl.value[0] == '4' || formControl.value[0] == '5' || (formControl.value[0] == '3' && formControl.value[1] == '7')){
          return;
        }else{
          return {invalid: true};
        }
      }
    ])
  });
  creditType: string;

  constructor(private httpService: HttpService, private encrypt: EncryptService) {
    if(localStorage.getItem('card')){
      httpService.getCard(JSON.parse(localStorage.getItem('card')).token).subscribe((res: any)=>{
        this.creditCardForm.controls.creditCardNumber.setValue(encrypt.decrypt(res.creditCardNumber));
        this.setCreditCardType();
      }) 
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creditCardNumber = this.creditCardForm.controls.creditCardNumber;
    if (creditCardNumber.valid) {
        this.httpService.addCard(creditCardNumber.value).subscribe((res : any)=>{
          localStorage.setItem('card', JSON.stringify(res));
          this.successMessage = "Card added!";
       })
    }

  }

  setCreditCardType() {
    if (this.creditCardForm.controls.creditCardNumber.value) {
      const firstChar = this.creditCardForm.controls.creditCardNumber.value[0];
      const secondChar = this.creditCardForm.controls.creditCardNumber.value[1];
      if (firstChar == '4') {
        this.creditType = 'Visa';
      } else if (firstChar == '5') {
        this.creditType = 'Master';
      } else if (firstChar == '3' && secondChar == '7') {
        this.creditType = "AmericanExpress";
      } else {
        this.creditType = "";
      }
    }

  }
}

