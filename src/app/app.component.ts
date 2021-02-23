import { Component } from '@angular/core';
import httpService from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  creditCardNumber: string;
  creditType: string;
  constructor(private httpService: httpService){
    this.creditCardNumber = httpService.getCard();
    if(this.creditCardNumber[0] == '4'){
      this.creditType = 'Visa';
    }else if(this.creditCardNumber[0] == '5' ){
      this.creditType = 'Master';
    }else if(this.creditCardNumber[0] == '3' && this.creditCardNumber[1] == '7'){
      this.creditType = "AmericanExpress";
    }
  }

}
