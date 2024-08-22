package com.web.xs.resume.builder.Resume_Builder.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="users")
@Data
@AllArgsConstructor
@NoArgsConstructor
////@Getter
////@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String userName;
	private String password;
	private String email;
	private String firstName;
	private String lastName;
	private long mobileNumber;
	private boolean active;
	private String roles;
	
	
}




