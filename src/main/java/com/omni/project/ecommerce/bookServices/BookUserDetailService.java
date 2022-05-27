package com.omni.project.ecommerce.bookServices;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.UserPassModel;
import com.omni.project.ecommerce.repository.UserPassRepository;

@Service
public class BookUserDetailService implements UserDetailsService {
	
	@Autowired
	private UserPassRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserPassModel user = userRepo.findById(username).get();
		if(user == null) return null;
		
		String name = user.getUsername();
		String password = user.getPassword();
		
		return new User(name, password, new ArrayList<>());
	}

}


