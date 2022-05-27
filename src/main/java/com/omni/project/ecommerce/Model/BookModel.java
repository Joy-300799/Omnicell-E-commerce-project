package com.omni.project.ecommerce.Model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BooksCollection")
public class BookModel {

	@Id
	private ObjectId id;

	private String bookName;
	private String authorName;
	private String description;
	private String genre;
	private double price;
	private String bookImgSrc;
	private String language;
	private int pages;
//<<<<<<< HEAD
	
	
	public BookModel(String bookName,
					String authorName,
					String description,
					double price,
					String genre,
					String bookImgSrc,
					String language,
					int pages) {
//=======
//
//	public BookModel(String bookName, String authorName, String description, double price, String genre,
//			String bookImgSrc, String language, int pages) {
//>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
		this.id = new ObjectId();
		this.bookName = bookName;
		this.authorName = authorName;
		this.description = description;
		this.price = price;
		this.genre = genre;
		this.bookImgSrc = bookImgSrc;
		this.language = language;
		this.pages = pages;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getGenre() {
		return genre;
	}
	
	
	public String getGenres() {
		return genre;
	}


	public String getBookImgSrc() {
		return bookImgSrc;
	}

	public void setBookImgSrc(String bookImgSrc) {
		this.bookImgSrc = bookImgSrc;
	}

	@Override
	public int hashCode() {
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null || obj.getClass() != this.getClass())
			return false;

		BookModel book = (BookModel) obj;
		return (book.bookName.equals(this.bookName) && book.authorName.equals(this.authorName));
	}

}
