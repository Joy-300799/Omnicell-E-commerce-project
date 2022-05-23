package com.omni.project.ecommerce.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, ObjectId> {
	@Query("{username:?0}")
	UserModel findByUsername(String username);
	
	@Query("{username:?0, password:?1}")
	UserModel findByUsernameAndPassword(String username, String password);
}


