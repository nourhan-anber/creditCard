import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  creditCardNumber = "111111111111";

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  submit(){

  }
}
