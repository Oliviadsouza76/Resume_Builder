package com.web.xs.resume.builder.Resume_Builder.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class EducationDTO {

	private String college;

	private String qualification;

	private LocalDate startDate;

	private LocalDate endDate;

	private String summary;

	// Getters and Setters
}
