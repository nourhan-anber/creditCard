package com.nourhan.backend.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nourhan.backend.dao.CreditCardRepo;
import com.nourhan.backend.model.CreditCard;

@RestController
public class CreditCardController {
	
	@Autowired
	CreditCardRepo repo;
	
	@GetMapping("/api/get/{token}")
	@ResponseBody
	public Optional<CreditCard> getCreditCard(@PathVariable String token) {
		return repo.findById(token);
	}
	
	@GetMapping("/api/add/{cardNumber}")
	@ResponseBody
	public CreditCard addCreditCard(@PathVariable String cardNumber) {
		CreditCard creditCardObj = new  CreditCard();
		creditCardObj.setCreditCardNumber(cardNumber);
		creditCardObj.setToken(UUID.randomUUID().toString());
		repo.save(creditCardObj);
		return creditCardObj;
	}
}
