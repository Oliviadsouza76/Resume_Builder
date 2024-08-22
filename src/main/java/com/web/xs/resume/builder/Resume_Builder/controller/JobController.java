package com.web.xs.resume.builder.Resume_Builder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.xs.resume.builder.Resume_Builder.entities.Job;
import com.web.xs.resume.builder.Resume_Builder.service.JobService;

@RestController
public class JobController {
	
	@Autowired
	public JobService jobService;

	@PostMapping("/saveUserJob")
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        Job createdJob = jobService.saveJob(job);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }
}
