package com.omni.project.ecommerce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.omni.project.ecommerce.Model.UserAllDetails;

@Repository
public interface UserDetailRepository extends MongoRepository<UserAllDetails, String> {
	
}
