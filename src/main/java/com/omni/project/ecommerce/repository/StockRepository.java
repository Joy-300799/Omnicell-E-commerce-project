package com.omni.project.ecommerce.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.BookStock;

@Repository
public interface StockRepository extends MongoRepository<BookStock, ObjectId> {
<<<<<<< HEAD
	
	BookStock findByBookBookName(String bookName);
	List<BookStock> findByBookGenre(String genre);
	void deleteByBookBookName(String bookName);

}
=======

	BookStock findByBookBookName(String bookName);

	List<BookStock> findByBookGenre(String genre);
}
>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
