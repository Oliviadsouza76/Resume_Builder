package com.web.xs.resume.builder.Resume_Builder.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.web.xs.resume.builder.Resume_Builder.dto.UserDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.User;
import com.web.xs.resume.builder.Resume_Builder.repos.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder; 
    
	public User addNewUser(UserDTO userDTO) {
	    if (userDTO == null) {
	        throw new IllegalArgumentException("UserDTO cannot be null");
	    }
	    String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
	    // Convert UserDTO to User entity
	    User user = new User();
	    user.setUserName(userDTO.getUserName());
	    user.setPassword(encodedPassword);
	    user.setActive(userDTO.isActive());
	    user.setRoles(userDTO.getRoles());
	    // Set other fields if necessary

	    return userRepo.save(user);
	}

	public User addRegisteredUsers(UserDTO userDTO)
	{
		if(userDTO == null)
		{
			throw new IllegalArgumentException("UserDetails cannot be Empty");
		}
		String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
		User userDetails = new User();
		userDetails.setFirstName(userDTO.getFirstName());
		userDetails.setLastName(userDTO.getLastName());
		userDetails.setMobileNumber(userDTO.getMobileNumber());
		userDetails.setEmail(userDTO.getEmail());
		userDetails.setPassword(encodedPassword);
		userDetails.setActive(true);
		userDetails.setRoles("USER_ROLE");
		return userRepo.save(userDetails);
	}
}
