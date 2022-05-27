package com.omni.project.ecommerce.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.BookStock;

@Repository
public interface StockRepository extends MongoRepository<BookStock, ObjectId> {
	
	BookStock findByBookBookName(String bookName);
	List<BookStock> findByBookGenre(String genre);
	void deleteByBookBookName(String bookName);

}
