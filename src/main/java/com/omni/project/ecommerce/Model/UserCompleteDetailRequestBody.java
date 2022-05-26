package com.omni.project.ecommerce.Model;


public class UserCompleteDetailRequestBody {
	private String username;
	private String password;
	private long phoneNumber;
	private String email;
	
	public UserCompleteDetailRequestBody(String username, String password, long phoneNumber, String email) {
		this.username = username;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public String getEmail() {
		return email;
	}	
	
	
}
