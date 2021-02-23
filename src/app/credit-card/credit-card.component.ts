import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import httpService from '../service/http.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  creditCardNumber : string;
  errorMessage : string;
  
  constructor(private httpService : httpService) { 

  }

  ngOnInit(): void {
  }

  submit(){
    this.errorMessage = "";
    if(this.creditCardNumber.length >= 13 && this.creditCardNumber.length <= 16){
      if(this.creditCardNumber[0] == '4' || this.creditCardNumber[0] == '5' || (this.creditCardNumber[0] == '3' && this.creditCardNumber[1] == '7')){
        this.httpService.addCard(this.creditCardNumber);
      }else{
        this.errorMessage = "The Credit card number should starts with 4 or 5 or 37";
      }
    }else{
      this.errorMessage = "The Credit card number should be between 13 and 16 digits";
    }
  }
}
