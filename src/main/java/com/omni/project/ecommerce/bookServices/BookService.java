package com.omni.project.ecommerce.bookServices;

import java.util.List;

import com.omni.project.ecommerce.Model.BookModel;

public interface BookService {
	
	List<BookModel> getAllBooks();
	List<BookModel> getBooksByAuthorName(String authorName);
	List<BookModel> getBooksByGenre(String genre);
	BookModel getBookByName(String name);
	
	void addBook(BookModel book);
	
	void updateBook(BookModel updatedBook, String bookName);
	
	void deleteBook(String bookName);
	
	
}
