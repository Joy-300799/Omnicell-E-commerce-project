package com.omni.project.ecommerce.Model;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="userDetails")
public class UserModel {

	@Id
	private ObjectId id;
	private String username;
	private String password;
	private List<BookModel> cart;
	
	
	public UserModel(String username, String password) {
		this.username = username;
		this.password = password;
		this.cart = new ArrayList<>();
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
	
	public void addBookInCart(BookModel book) {
		this.cart.add(book);
	}
	
	public void removeBookFromCart(BookModel book) {
		this.cart.remove(book);
	}
	
	public List<BookModel> getCart() {
		return cart;
	}
	
}
