import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import HttpService from './service/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import EncryptService from './service/encrypt.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ HttpService, EncryptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
