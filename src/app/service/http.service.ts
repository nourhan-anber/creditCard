import { Injectable } from "@angular/core";

@Injectable()

export default class httpService{

    addCard(cardNumber: string){
        localStorage.setItem('number', cardNumber);
    }
    getCard() : string{
        return localStorage.getItem('number');
    }
}