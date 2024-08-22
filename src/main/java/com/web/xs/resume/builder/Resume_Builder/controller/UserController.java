package com.web.xs.resume.builder.Resume_Builder.controller;

import java.io.BufferedReader;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.web.xs.resume.builder.Resume_Builder.dto.UserDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.AuthRequest;
import com.web.xs.resume.builder.Resume_Builder.entities.User;
import com.web.xs.resume.builder.Resume_Builder.service.JwtService;
import com.web.xs.resume.builder.Resume_Builder.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping(value = "/addUser", consumes = "application/json")
	@CrossOrigin(origins = "" + "*", allowedHeaders = "*")
	public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO) {
		try {
			// Optionally convert DTO to JSON here if needed
			// JSONObject jsonObject = new JSONObject(userDTO);
			User savedUser = userService.addNewUser(userDTO);
			return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
		} catch (IllegalArgumentException e) {
			// Handle specific exceptions
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			// Log the exception
			System.err.println("Error saving user: " + e.getMessage());
			e.printStackTrace();
			return new ResponseEntity<>("Failed to save user", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/generateToken")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
		System.out.println("Token API called");

		try {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

			System.out.println("Authentication details: " + authentication);

			if (authentication.isAuthenticated()) {
				String token = jwtService.generateToken(authRequest.getUsername());
				System.out.println("Generated token: " + token);
				return token;
			} else {
				throw new UsernameNotFoundException("Invalid user request!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("Error during authentication", e);
		}
	}

	@GetMapping("/user/userProfile")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public String userProfile() {
		return "Welcome to User Profile";
	}
	
	@PostMapping(value = "/addRegisterUser", consumes = "application/json")
	@CrossOrigin(origins = "" + "*", allowedHeaders = "*")
	public ResponseEntity<?> addRegisteredNewUser(@RequestBody UserDTO userDto) {
		try {
			User savedRegisterUser = userService.addRegisteredUsers(userDto);
			return new ResponseEntity<>(savedRegisterUser, HttpStatus.CREATED);
		} catch (IllegalArgumentException expAg) {
			return new ResponseEntity<>(expAg.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception exp) {
			System.out.println(exp.getMessage());
			exp.printStackTrace();
			return new ResponseEntity<>("Failed to Register", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
