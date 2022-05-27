package com.omni.project.ecommerce.bookServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.BookModel;
import com.omni.project.ecommerce.Model.UserAllDetails;
import com.omni.project.ecommerce.repository.UserDetailRepository;

@Service
public class UserService {
	
	@Autowired
	private UserDetailRepository userRepo;
	
	@Autowired
	private StockService stockService;
	
	public UserAllDetails getUserAllDetails(String username) {
		return this.userRepo.findById(username).get();
	}
	
	public void addUserAllDetails(UserAllDetails userAllDetails) {
		this.userRepo.insert(userAllDetails);
	}
	
	public void updateUserAllDetails(UserAllDetails updatedUserAllDetail,String username) {
		UserAllDetails userAllDetails = this.userRepo.findById(username).get();
		userAllDetails.setUsername(updatedUserAllDetail.getUsername());
		userAllDetails.setPhoneNumber(updatedUserAllDetail.getPhoneNumber());
		userAllDetails.setEmail(updatedUserAllDetail.getEmail());
		userAllDetails.setCart(updatedUserAllDetail.getCart());
		this.userRepo.save(userAllDetails);
	}
	
	public boolean userAllDetailsExistorNot(String username) {
		return this.userRepo.existsById(username);
	}
	
	public void deleteUserAllDetails(String username) {
		this.userRepo.deleteById(username);
	}
	
	public void addBookToCart(String username,BookModel book) {
		UserAllDetails userAllDetails = this.userRepo.findById(username).get();
		userAllDetails.addBookToCart(book);
		this.userRepo.save(userAllDetails);
	}
	
	public void removeBookFromCart(String username,BookModel book) {
		UserAllDetails userAllDetails = this.userRepo.findById(username).get();
		userAllDetails.removeBookFromCart(book);
		this.userRepo.save(userAllDetails);
	}
	
	public void buyAllBookInCart(String username) {		
		UserAllDetails userAllDetails = this.userRepo.findById(username).get();
		List<BookModel> cart = userAllDetails.getCart();
		for(BookModel book: cart) {
			this.stockService.updateBookQuantity(book.getBookName(), -1);
		}
		userAllDetails.getCart().clear();
		this.userRepo.save(userAllDetails);
	}
	
}
