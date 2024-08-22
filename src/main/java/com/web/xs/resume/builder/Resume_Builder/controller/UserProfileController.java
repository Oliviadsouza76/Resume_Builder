package com.web.xs.resume.builder.Resume_Builder.controller;

import java.security.Principal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.web.xs.resume.builder.Resume_Builder.dto.UserProfileDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.Education;
import com.web.xs.resume.builder.Resume_Builder.entities.Job;
import com.web.xs.resume.builder.Resume_Builder.entities.UserProfile;
import com.web.xs.resume.builder.Resume_Builder.repos.UserProfileRepository;
import com.web.xs.resume.builder.Resume_Builder.service.UserProfileService;

@Controller
@RequestMapping("/user/userProfile")
public class UserProfileController {

	@Autowired
	private UserProfileRepository userProfileRepository;

	@Autowired
	private UserProfileService userProfileService;

	@PostMapping("/addUserProfile")
	public ResponseEntity<UserProfile> addUserProfile(@RequestBody UserProfileDTO userProfile) {
		UserProfile newUserProfile = userProfileService.addUserProfile(userProfile);
		return ResponseEntity.ok(newUserProfile);
	}

	@GetMapping("/edit")
	public String edit(Model model, Principal principal, @RequestParam(required = false) String add) {
		String userId = principal.getName();
		model.addAttribute("userName", userId);
		Optional<UserProfile> userProfileOptional = userProfileRepository.findByUserName(userId);
		userProfileOptional.orElseThrow(() -> new RuntimeException("Not found: " + userId));
		UserProfile userProfile = userProfileOptional.get();
		if ("job".equals(add)) {
			userProfile.getJobs().add(new Job());
		} else if ("education".equals(add)) {
			userProfile.getEducations().add(new Education());
		} else if ("skill".equals(add)) {
			userProfile.getSkills().add("");
		}

		model.addAttribute("userProfile", userProfile);
		return "profile-edit";
	}

	@GetMapping("/userProfile/{id}")
	public ResponseEntity<UserProfile> getUserProfile(@PathVariable int id) {
		Optional<UserProfile> userProfile = userProfileRepository.findById(id);
		return userProfile.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PutMapping("/edit/byUserProfile/{id}")
	public ResponseEntity<UserProfile> editUserProfileById(@PathVariable int id,
			@RequestBody UserProfileDTO userProfileDTO) {
		return userProfileService.editUserProfileId(id, userProfileDTO);
	}
	

}
