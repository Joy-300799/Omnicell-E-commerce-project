package com.omni.project.ecommerce.bookServices;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.BookModel;
import com.omni.project.ecommerce.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository bookrepo;
	
	@Override
	public List<BookModel> getBooksByAuthorName(String authorName) {
		return this.bookrepo.findByAuthorName(authorName);
	}
	
	@Override
	public List<BookModel> getAllBooks() {
		return this.bookrepo.findAll();
	}

	@Override
	public List<BookModel> getBooksByGenre(String genre) {
		return this.bookrepo.findByGenre(genre);
	}

	@Override
	public BookModel getBookByName(String name) {
		
		return this.bookrepo.findByBookName(name);
	}

	@Override
	public void addBook(BookModel book) {
		bookrepo.insert(book);		
	}

	@Override
	public void updateBook(BookModel updatedBook, String bookName) {
		BookModel book =  bookrepo.findByBookName(bookName);
		book.setAuthorName(updatedBook.getAuthorName());
		book.setBookImgSrc(updatedBook.getBookImgSrc());
		book.setBookName(updatedBook.getBookName());
		book.setDescription(updatedBook.getDescription());
		book.setGenres(updatedBook.getGenres());
		book.setPrice(updatedBook.getPrice());
		bookrepo.save(book);
		
	}

	@Override
	public void deleteBook(String bookName) {
		bookrepo.deleteBookModelByBookName(bookName);
		
	}
	
	public void getList(String genres) {
		bookrepo.findByGenresIn(Arrays.asList(genres));
	}
	
	
	
}
