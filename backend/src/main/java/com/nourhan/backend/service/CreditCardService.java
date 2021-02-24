package com.nourhan.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nourhan.backend.dao.CreditCardRepo;
import com.nourhan.backend.model.CreditCard;

@Service
public class CreditCardService {

	@Autowired
	CreditCardRepo repo;
	
	public Optional<CreditCard> findRepo(String token){
		return repo.findById(token);
	}
	
	public void saveRepo(CreditCard cardInfo) {
		repo.save(cardInfo);
	}
}
