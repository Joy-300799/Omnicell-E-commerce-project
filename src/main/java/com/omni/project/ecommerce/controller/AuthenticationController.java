package com.omni.project.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.Model.AuthenticationRequest;
import com.omni.project.ecommerce.Model.UserAllDetails;
import com.omni.project.ecommerce.Model.UserCompleteDetailRequestBody;
import com.omni.project.ecommerce.Model.UserPassModel;
import com.omni.project.ecommerce.bookServices.AuthenticationService;
import com.omni.project.ecommerce.bookServices.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AuthenticationController {
	
	@Autowired
	AuthenticationService authService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody UserCompleteDetailRequestBody newUser) {
		authService.addUser(newUser.getUsername(),
				passwordEncoder.encode(newUser.getPassword()));
		userService.addUserAllDetails(new UserAllDetails(newUser.getUsername(),
											newUser.getPhoneNumber(),newUser.getEmail()));
		return ResponseEntity.ok(newUser);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> checkUser(@RequestBody AuthenticationRequest newUser) {
		String username = newUser.getUsername();
		String password = newUser.getPassword();
//		authenticationManager
//		.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//		return "authentication success";
		if (authService.login(username, password)) {
//			return new ResponseEntity("authentication success", HttpStatus.OK);
			return ResponseEntity.ok(new ResponseEntity("authentication success", HttpStatus.OK));
		}
		return new ResponseEntity("Unauthorized", HttpStatus.UNAUTHORIZED); 
	}
	
	@GetMapping("/all")
	public List<UserPassModel> getAllContact(){
		return this.authService.getAllUser();
	}
	
}









//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.omni.project.ecommerce.Model.AuthenticationRequest;
//import com.omni.project.ecommerce.bookServices.UserService;
//
//@RestController
//public class AuthenticationController {
//	
//	@Autowired
//	UserService userService;
//	
//	@Autowired
//	PasswordEncoder passwordEncoder;
//	
//	@Autowired
//	AuthenticationManager authenticationManager;
//	
//	@PostMapping("/signup")
//	public String signup(@RequestBody AuthenticationRequest request) {
//		userService.addUser(request.getUsername(), passwordEncoder.encode(request.getPassword()));
//		return "sign up successfully";
//	}
//	
//	@PostMapping("/login")
//	public String login(@RequestBody AuthenticationRequest request) {
//		authenticationManager.authenticate
//		(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
//		return "login successfully";
//	}
//	
//}
