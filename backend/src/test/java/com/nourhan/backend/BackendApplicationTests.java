package com.nourhan.backend;

import static org.hamcrest.Matchers.containsString;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import com.nourhan.backend.model.CreditCard;
import com.nourhan.backend.service.CreditCardService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BackendApplication.class)
@AutoConfigureMockMvc
class BackendApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private CreditCardService service;

	@Test
	public void greetingShouldPostCreditCard() throws Exception {
		CreditCard testCard = new CreditCard();
		testCard.setCreditCardNumber("565656565656565655");
		MvcResult result = this.mockMvc
				.perform(post("/api/add").content(asJsonString(testCard)).contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().string(containsString(testCard.getCreditCardNumber())))
				.andReturn();
		String response = result.getResponse().getContentAsString();
		String responseToken = JsonPath.parse(response).read("$.token");
		assertNotEquals(responseToken, null);

	}

	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
