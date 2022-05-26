package com.omni.project.ecommerce.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.UserPassModel;

@Repository
public interface UserPassRepository extends MongoRepository<UserPassModel, String> {
	
	@Query("{username:?0}")
	Optional<UserPassModel> findById(String username);
	
	@Query("{username:?0, password:?1}")
	UserPassModel findByUsernameAndPassword(String username, String password);
	
}


