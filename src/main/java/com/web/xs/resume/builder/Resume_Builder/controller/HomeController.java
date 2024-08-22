package com.web.xs.resume.builder.Resume_Builder.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.security.core.Authentication;
import com.web.xs.resume.builder.Resume_Builder.entities.Education;
import com.web.xs.resume.builder.Resume_Builder.entities.Job;
import com.web.xs.resume.builder.Resume_Builder.entities.UserProfile;
import com.web.xs.resume.builder.Resume_Builder.repos.UserProfileRepository;

@RestController
public class HomeController {

	@Autowired
	UserProfileRepository userProfileRepository;

	@GetMapping("/")
	public String home() {
		return "index";
	}

	@GetMapping(value = "/editUserAccess", produces = "application/json")
	public ResponseEntity<UserProfile> edit(String add) {
		// Retrieve Authentication object
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (authentication == null || !authentication.isAuthenticated()) {
			throw new RuntimeException("User is not authenticated");
		}

		String user_id = authentication.getName(); // Get the username from the authentication object

		// Fetch the UserProfile from the repository
		Optional<UserProfile> userProOptional = userProfileRepository.findByUserName(user_id);
		UserProfile userProfile = userProOptional.orElseThrow(() -> new RuntimeException("Not Found: " + user_id));

		// Modify UserProfile based on the 'add' parameter
		if ("job".equals(add)) {
			userProfile.getJobs().add(new Job());
		} else if ("education".equals(add)) {
			userProfile.getEducations().add(new Education());
		} else if ("skill".equals(add)) {
			userProfile.getSkills().add("");
		}

		// Save the updated UserProfile
		userProfileRepository.save(userProfile);

		return ResponseEntity.ok(userProfile); // Return the updated UserProfile with HTTP status 200
	}

	
}
