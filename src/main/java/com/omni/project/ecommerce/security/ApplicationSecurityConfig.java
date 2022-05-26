package com.omni.project.ecommerce.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.omni.project.ecommerce.bookServices.BookUserDetailService;

@Configuration
@SuppressWarnings("deprecation")
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	BookUserDetailService service;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(service);
		auth.authenticationProvider(daoAuthenticationProvider());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
		return NoOpPasswordEncoder.getInstance();
	}
	
	@Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsService(service);
        return provider;
    }

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf()
			.disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests()
			.antMatchers("/login", "/signup","/all",
					"/getAllBooks","/addBook",
					"/addBookInCart","/removeBookFromCart",
					"/getBookByName","/getBooksByGenre",
					"/getBooksByAuthorName","/addBookStock","/getBookStock",
<<<<<<< HEAD
					"/getAllBookStockOfParticularGenre","/getAllBookStock",
					"/updateBookQuantity","/updateBookStock","/deleteBook")
=======
					"/getAllBookStockOfParticularGenre","/getAllBookStock")
>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
			.permitAll()
		.anyRequest()
		.authenticated();
		
	}
	

}

















//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.omni.project.ecommerce.bookServices.BookUserDetailService;
//
//@SuppressWarnings("deprecation")
//@Configuration
//@EnableWebSecurity
//public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {
//
//	@Autowired
//	BookUserDetailService service;
//
//	@Bean
//	public PasswordEncoder passwordEncoder() {
////		return new BCryptPasswordEncoder();
//		return NoOpPasswordEncoder.getInstance();
//	}
//
//	protected void configure(HttpSecurity http) throws Exception {
//		http.csrf().disable().authorizeRequests()
//				.antMatchers("/login", "/signup")
//				.permitAll();
////				.anyRequest().authenticated();
//	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.authenticationProvider(daoAuthenticationProvider());
//	}
//
//	@Bean
//	public DaoAuthenticationProvider daoAuthenticationProvider() {
//		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//		provider.setPasswordEncoder(passwordEncoder());
//		provider.setUserDetailsService(service);
//		return provider;
//	}
//
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//		return super.authenticationManagerBean();
//	}
//
//}
