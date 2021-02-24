package com.nourhan.backend.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nourhan.backend.model.CreditCard;
import com.nourhan.backend.service.CreditCardService;

@RestController
public class CreditCardController {
	
	@Autowired
	CreditCardService service;
	
	@GetMapping("/api/get/{token}")
	@ResponseBody
	public Optional<CreditCard> getCreditCard(@PathVariable String token) {
		return service.findRepo(token);
	}
	
	@RequestMapping(value="/api/add" ,method = RequestMethod.POST)
	@ResponseBody
	public CreditCard addCreditCard(@RequestBody CreditCard cardInfo) {
		CreditCard creditCardObj = new  CreditCard();
		creditCardObj.setCreditCardNumber(cardInfo.getCreditCardNumber());
		creditCardObj.setToken(UUID.randomUUID().toString());
		service.saveRepo(creditCardObj);
		return creditCardObj;
	}
}
