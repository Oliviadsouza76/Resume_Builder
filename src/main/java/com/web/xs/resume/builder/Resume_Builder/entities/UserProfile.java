package com.web.xs.resume.builder.Resume_Builder.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.List;
import java.util.List;

//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class UserProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Ensure ID generation strategy is set to IDENTITY
	private int id;
	private String userName;
	private int theme;
	private String summary;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String designation;

//	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//	@JoinColumn(name = "id")
//	List<Job> jobs = new ArrayList<>();
	
	@OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Job> jobs = new ArrayList<>();
	
	@OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL, orphanRemoval = true)
	List<Education> educations = new ArrayList<>();

//	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//	//@JoinColumn(name = "id")
//	List<Education> educations = new ArrayList<>();

	@ElementCollection(targetClass = String.class)
	List<String> skills = new ArrayList<>();

}



