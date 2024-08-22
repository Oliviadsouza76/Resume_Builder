//package com.web.xs.resume.builder.Resume_Builder.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Lazy;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.web.xs.resume.builder.Resume_Builder.entities.MyUserDetails;
//import com.web.xs.resume.builder.Resume_Builder.entities.User;
//import com.web.xs.resume.builder.Resume_Builder.repos.UserRepository;
//@Service
//public class MyUserDetailsService implements UserDetailsService{
//	
//	@Autowired
////	@Lazy
//	UserRepository userRepo;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		Optional <User> user = userRepo.findByUserName(username);
//		user.orElseThrow(()-> new UsernameNotFoundException("Not Found " + username));
//		return user.map(MyUserDetails::new).get();
//	}
//
//}
