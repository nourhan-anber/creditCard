import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card.component';
import HttpService from '../service/http.service';
import EncryptService from '../service/encrypt.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardComponent],
      imports: [HttpClientTestingModule],
      providers: [ HttpService, EncryptService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept only numbers starts with 4, 5 and 37', ()=>{
    component.creditCardForm.controls.creditCardNumber.setValue("11111111111111");
    component.creditCardForm.markAsDirty();
    expect(component.creditCardForm.controls.creditCardNumber.errors.invalid).toBeTruthy();
  })
  it('should acceept numbers that betweeen 13 and 16 digits', ()=>{
    component.creditCardForm.controls.creditCardNumber.setValue("41111111777111");
    component.creditCardForm.markAsDirty();
    expect(component.creditCardForm.controls.creditCardNumber.errors).toBeNull();
  })
  it('should return visa if the number starts with 4', ()=>{
    component.creditCardForm.controls.creditCardNumber.setValue("41111111777111");
    component.creditType = "";
    component.setCreditCardType();
    expect(component.creditType).toBe("Visa");

  })
  it('should return master card if the number starts with 5', ()=>{
    component.creditCardForm.controls.creditCardNumber.setValue("51111111777111");
    component.creditType = "";
    component.setCreditCardType();
    expect(component.creditType).toBe("Master");

  })
  it('should return ameerican express if the number starts with 37', ()=>{
    component.creditCardForm.controls.creditCardNumber.setValue("37111111777111");
    component.creditType = "";
    component.setCreditCardType();
    expect(component.creditType).toBe("AmericanExpress");

  })
});
