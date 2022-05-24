package com.omni.project.ecommerce.bookServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.UserModel;
import com.omni.project.ecommerce.repository.UserRepository;

@Service
public class UserService {
	
	
	@Autowired
	private UserRepository repo;
	
	public UserModel getUserByUsername(String username) {
		return this.repo.findByUsername(username);
	}
	
	public void addUser(String username,String password) {
		this.repo.insert(new UserModel(username,password));
	}
	
	public List<UserModel> getAllUser(){
		return this.repo.findAll();
	}
	
	public void updateUser(UserModel user) {
		this.repo.save(user);
	}
	
	public boolean login(String username, String password) {
		UserModel user = repo.findByUsernameAndPassword(username, password);
		return user != null;
	}
	
}
