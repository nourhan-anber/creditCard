import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import EncryptService from "./encrypt.service";

@Injectable()

export default class HttpService{

    baseUrl = '/api/';
    constructor(private encrypt: EncryptService, private http: HttpClient){

    }
    addCard(cardNumber: string){
       
         this.http.get(this.baseUrl + 'add/' + cardNumber).subscribe((res : any)=>{
            res.creditCardNumber = this.encrypt.encrypt(res.creditCardNumber);
            localStorage.setItem('card', JSON.stringify(res));
         })
    }
    getCard(token : string){
        return this.http.get(this.baseUrl + 'get/' + token);
        
    }
}