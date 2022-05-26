package com.omni.project.ecommerce.Model;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="userDetails")
public class UserPassModel {

	@Id
	private String username;
	private String password;
	
	
	public UserPassModel(String username, String password) {
		this.username = username;
		this.password = password;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
//	public void addBookInCart(BookModel book) {
//		this.cart.add(book);
//	}
//	
//	public void removeBookFromCart(BookModel book) {
//		this.cart.remove(book);
//	}
//	
//	public List<BookModel> getCart() {
//		return cart;
//	}
	
}
