package com.omni.project.ecommerce.Model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="UsersAllData")
public class UserAllDetails {
	@Id
	private String username;
	private long phoneNumber;
	private String email;
	private List<BookModel> cart;
	
	public UserAllDetails(String username, long phoneNumber,
			String email) {
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.cart = new ArrayList<>();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<BookModel> getCart() {
		return cart;
	}

	public void setCart(List<BookModel> cart) {
		this.cart = cart;
	}
	
	public void addBookToCart(BookModel bookModel) {
		this.cart.add(bookModel);
	}
	
	public void removeBookFromCart(BookModel bookModel) {
		this.cart.remove(bookModel);
	}
}
