package com.web.xs.resume.builder.Resume_Builder.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.xs.resume.builder.Resume_Builder.entities.User;

@Repository

public interface UserRepository extends JpaRepository<User, Long>{
	
	Optional<User> findByUserName(String username);
	
}
