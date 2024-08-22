package com.web.xs.resume.builder.Resume_Builder.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.web.xs.resume.builder.Resume_Builder.dto.EducationDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.Education;
import com.web.xs.resume.builder.Resume_Builder.repos.EducationRepository;

@Service
public class EducationService {

	@Autowired
	private EducationRepository educationRepository;

//	@Transactional
//	public Education saveEducation(Education educationDTO) {
//		Education education = new Education();
//		education.setCollege(educationDTO.getCollege());
//		education.setQualification(educationDTO.getQualification());
//		education.setStartDate(educationDTO.getStartDate());
//		education.setEndDate(educationDTO.getEndDate());
//		education.setSummary(educationDTO.getSummary());
//
//		return educationRepository.save(education);
//	}
	
	public Education saveEducation(Education education) {
		 education = new Education();
		education.setCollege("University of Example");
		education.setQualification("Bachelor's Degree");
		education.setStartDate(LocalDate.of(2020, 1, 1));
		education.setEndDate(LocalDate.of(2024, 6, 30));
		education.setSummary("Completed a Bachelor's degree in Computer Science.");
		//education.setUserProfile(userProfile); // Assume userProfile is set

		//education = educationRepository.save(education);

        return educationRepository.save(education);
    }
	
	
}
