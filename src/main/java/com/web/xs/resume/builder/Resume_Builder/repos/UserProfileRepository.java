package com.web.xs.resume.builder.Resume_Builder.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.xs.resume.builder.Resume_Builder.entities.UserProfile;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer>{

	Optional<UserProfile> findById(int id);
	
	Optional<UserProfile> findByUserName(String userName);
}
