package com.web.xs.resume.builder.Resume_Builder.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "jobs")
@Data
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String company;

	private String designation;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate startDate;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate endDate;

	private boolean isCurrentJob;

	@ManyToOne
	@JoinColumn(name = "user_profile_id") // Foreign key in Job table
	private UserProfile userProfile;

}
