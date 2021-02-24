package com.nourhan.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CreditCard {

	@Id
	private String token;
	private String creditCardNumber;
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getCreditCardNumber() {
		return creditCardNumber;
	}
	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	
	
}
