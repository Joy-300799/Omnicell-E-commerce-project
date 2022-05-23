package com.omni.project.ecommerce.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.BookModel;

@Repository
public interface BookRepository extends MongoRepository<BookModel, ObjectId> {
	
	@Query("{genre:?0}")
	List<BookModel> findByGenre(String genre);
	
	@Query("{bookName:?0}")
	BookModel findByBookName(String bookName);
	
	@Query("{authorName:?0}")
	List<BookModel> findByAuthorName(String authorName);
	
	void deleteBookModelByBookName(String bookName);
	
	List<BookModel> findByGenresIn(List<String> genres);
	
	
}
