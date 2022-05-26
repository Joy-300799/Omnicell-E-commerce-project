package com.omni.project.ecommerce.bookServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.UserPassModel;
import com.omni.project.ecommerce.repository.UserPassRepository;

@Service
public class AuthenticationService {
	
	
	@Autowired
	private UserPassRepository repo;
	
	public Optional<UserPassModel> getUserByUsername(String username) {
		return this.repo.findById(username);
	}
	
	public void addUser(String username,String password) {
		this.repo.insert(new UserPassModel(username,password));
	}
	
	public List<UserPassModel> getAllUser(){
		return this.repo.findAll();
	}
	
	public void updateUser(UserPassModel user) {
		this.repo.save(user);
	}
	
	public boolean login(String username, String password) {
		UserPassModel user = repo.findByUsernameAndPassword(username, password);
		return user != null;
	}
	
}
