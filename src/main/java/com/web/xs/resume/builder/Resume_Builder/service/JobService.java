package com.web.xs.resume.builder.Resume_Builder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.xs.resume.builder.Resume_Builder.entities.Job;
import com.web.xs.resume.builder.Resume_Builder.repos.JobRepository;

@Service
public class JobService {

	@Autowired
	private JobRepository jobRepo;

	public Job saveJob(Job job) {
		return jobRepo.save(job);
	}
}
