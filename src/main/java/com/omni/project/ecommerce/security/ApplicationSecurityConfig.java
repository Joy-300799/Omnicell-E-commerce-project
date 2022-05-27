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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.omni.project.ecommerce.bookServices.BookUserDetailService;

@Configuration
@SuppressWarnings("deprecation")
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	BookUserDetailService service;
	
	@Autowired
	private JwtFilterRequest jwtFilterRequest;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(service);
		auth.userDetailsService(service);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
		return NoOpPasswordEncoder.getInstance();
	}
	
	@Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
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
		
//		http
//			.csrf()
//			.disable()
//			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//			.authorizeRequests()
//			.antMatchers("/login", "/signup","/all",
//					"/getAllBooks","/addBook",
//					"/addBookInCart","/removeBookFromCart",
//					"/getBookByName","/getBooksByGenre",
//					"/getBooksByAuthorName","/addBookStock","/getBookStock",
//					"/getAllBookStockOfParticularGenre","/getAllBookStock",
//					"/updateBookQuantity","/updateBookStock","/deleteBook",
//					"/getUserCart","/buyAllBookInCart","/addBookInCart")
//			.permitAll()
//		.anyRequest()
//		.authenticated();
		
		
		http.csrf().disable().authorizeRequests().antMatchers("/login", "/signup","/getAllBookStock","/getBookStock").permitAll()
		.anyRequest().authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.addFilterBefore(jwtFilterRequest, UsernamePasswordAuthenticationFilter.class);
		http.cors();
		
		
//		http.csrf().disable().authorizeRequests().antMatchers("/login", "/signup","/all",
//				"/getAllBooks","/addBook",
//				"/addBookInCart","/removeBookFromCart",
//				"/getBookByName","/getBooksByGenre",
//				"/getBooksByAuthorName","/addBookStock","/getBookStock",
//				"/getAllBookStockOfParticularGenre","/getAllBookStock",
//				"/updateBookQuantity","/updateBookStock","/deleteBook",
//				"/getUserCart","/buyAllBookInCart","/addBookInCart").permitAll()
//		.anyRequest().authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//		
//		http.addFilterBefore(jwtFilterRequest, UsernamePasswordAuthenticationFilter.class);
//		http.cors();
		
	}
	

}
