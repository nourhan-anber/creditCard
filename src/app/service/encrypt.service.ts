import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable()

export default class EncryptService{

    secretKey = "koshariw7omos";
    constructor(){ }
    encrypt(value : string) : string{
        return CryptoJS.DES.encrypt(value, this.secretKey.trim()).toString();
      }
    
      decrypt(textToDecrypt : string){
        return CryptoJS.DES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
      }
}