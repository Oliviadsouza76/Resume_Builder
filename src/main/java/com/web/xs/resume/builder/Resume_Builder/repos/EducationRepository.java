package com.web.xs.resume.builder.Resume_Builder.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.xs.resume.builder.Resume_Builder.entities.Education;

@Repository
public interface EducationRepository extends JpaRepository<Education, Integer>{

	
}
