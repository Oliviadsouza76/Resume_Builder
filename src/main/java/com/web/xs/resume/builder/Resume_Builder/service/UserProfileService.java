package com.web.xs.resume.builder.Resume_Builder.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.web.xs.resume.builder.Resume_Builder.dto.EducationDTO;
import com.web.xs.resume.builder.Resume_Builder.dto.UserProfileDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.Education;
import com.web.xs.resume.builder.Resume_Builder.entities.Job;
import com.web.xs.resume.builder.Resume_Builder.entities.UserProfile;
import com.web.xs.resume.builder.Resume_Builder.repos.UserProfileRepository;

import io.jsonwebtoken.lang.Collections;

@Service
public class UserProfileService {

	@Autowired
	private UserProfileRepository userProfileRepository;

	public UserProfile addUserProfile(UserProfileDTO userProfileDTO) {

		UserProfile userProfile = new UserProfile();
		// Convert DTO to Entity
		userProfile.setId(userProfileDTO.getId());
		userProfile.setUserName(userProfileDTO.getUserName());
		userProfile.setTheme(userProfileDTO.getTheme());
		userProfile.setSummary(userProfileDTO.getSummary());
		userProfile.setFirstName(userProfileDTO.getFirstName());
		userProfile.setLastName(userProfileDTO.getLastName());
		userProfile.setEmail(userProfileDTO.getEmail());
		userProfile.setPhone(userProfileDTO.getPhone());
		userProfile.setDesignation(userProfileDTO.getDesignation());
		userProfile.setSkills(userProfileDTO.getSkills());
		userProfile.setUserName(userProfile.getUserName());
		for (Job job : userProfileDTO.getJobs()) {
			job.setUserProfile(userProfile);
		}
		userProfile.setJobs(userProfileDTO.getJobs());

		for (Education education : userProfileDTO.getEducations()) {
			education.setUserProfile(userProfile);
		}
		userProfile.setEducations(userProfileDTO.getEducations());

		userProfile.setSkills(userProfileDTO.getSkills());
		System.out.println("Adding user profile: " + userProfile);
		UserProfile savedProfile = userProfileRepository.save(userProfile);
		System.out.println("Saved user profile: " + savedProfile);
		return savedProfile;
	}
	
	public ResponseEntity<UserProfile> editUserProfileId(int id,UserProfileDTO userProfileDto)
	{
		Optional <UserProfile> userProfile =  userProfileRepository.findById(id);
		if(userProfile.isEmpty())
		{
			return ResponseEntity.notFound().build();
		}
		UserProfile userPrf = userProfile.get();
		updateUserProfile(userPrf,userProfileDto);
		UserProfile userProfileUpdated = userProfileRepository.save(userPrf);
		return ResponseEntity.ok(userProfileUpdated);
	}

	private void updateUserProfile(UserProfile userProfile, UserProfileDTO userProfileDTO)
	{
		userProfile.setUserName(userProfileDTO.getUserName());
		userProfile.setDesignation(userProfileDTO.getDesignation());
		userProfile.setEmail(userProfileDTO.getEmail());
		userProfile.setLastName(userProfileDTO.getLastName());
		userProfile.setPhone(userProfileDTO.getLastName());
		userProfile.setSummary(userProfileDTO.getSummary());
		userProfile.setTheme(userProfileDTO.getTheme());
		userProfile.setSkills(userProfileDTO.getSkills());
		
		if(userProfileDTO.getJobs() !=null)
		{
			 List<Job> updatedJobs = userProfileDTO.getJobs().stream()
					.map(jobDTO -> {
						Job job = new Job();
						job.setCompany(jobDTO.getCompany());
						job.setDesignation(jobDTO.getDesignation());
						job.setStartDate(jobDTO.getStartDate());
						job.setEndDate(jobDTO.getEndDate());
						return job;
					}).collect(Collectors.toList());
			 userProfile.getJobs().clear();
			 userProfile.setJobs(updatedJobs);
		}
		
		if(userProfileDTO.getEducations()!=null)
		{
			List<Education> updatedEducation = userProfileDTO.getEducations().stream()
					.map(educationDTO->{
						Education edu = new Education();
						edu.setCollege(educationDTO.getCollege());
						edu.setQualification(educationDTO.getQualification());
						edu.setStartDate(educationDTO.getStartDate());
						edu.setEndDate(educationDTO.getEndDate());
						edu.setSummary(educationDTO.getSummary());
						return edu;
					}).collect(Collectors.toList());
			userProfile.getEducations().clear(); 
			 userProfile.setEducations(updatedEducation);
		}
		
	}
}
