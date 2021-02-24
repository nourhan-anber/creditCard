import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import EncryptService from "./encrypt.service";

@Injectable()

export default class HttpService{

    baseUrl = '/api/';
    constructor(private encrypt: EncryptService, private http: HttpClient){

    }
    addCard(cardNumber: string){
       
        return this.http.post(this.baseUrl + 'add', {"token": "", "creditCardNumber": this.encrypt.encrypt(cardNumber)});
    }
    getCard(token : string){
        return this.http.get(this.baseUrl + 'get/' + token);
        
    }
}