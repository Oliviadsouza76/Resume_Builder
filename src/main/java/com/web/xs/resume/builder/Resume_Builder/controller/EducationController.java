package com.web.xs.resume.builder.Resume_Builder.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.xs.resume.builder.Resume_Builder.dto.EducationDTO;
import com.web.xs.resume.builder.Resume_Builder.entities.Education;
import com.web.xs.resume.builder.Resume_Builder.service.EducationService;

@RestController
//@RequestMapping("/api")
public class EducationController {

    @Autowired
    private EducationService educationService;

    @RequestMapping(value = "/education" ,produces="application/json")
    public ResponseEntity<?> saveEducation(@RequestBody Education educationDTO) {
        try {
            Education savedEducation = educationService.saveEducation(educationDTO);
            return new ResponseEntity<>(savedEducation, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            System.err.println("Error saving education: " + e.getMessage());
            e.printStackTrace();
            return new ResponseEntity<>("Failed to save education", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
