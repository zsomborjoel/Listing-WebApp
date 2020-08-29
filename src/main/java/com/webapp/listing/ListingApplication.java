package com.webapp.listing;

import com.webapp.listing.model.User;
import com.webapp.listing.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ListingApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ListingApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("Zsombor", "Gyurkovics", "zsomborjoel@gmail.com", "06309540316"));
		userRepository.save(new User("Zsolt", "Kovács", "zsoltkovacs@gmail.com", "06704321278"));
		userRepository.save(new User("Ákos", "Szakács", "akoszakacs@gmail.com", "+36203487867"));
	}

}
