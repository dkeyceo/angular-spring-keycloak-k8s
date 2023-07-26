package com.dkey.keycloak.k8s;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
public class BackendKeycloakK8sApplication {

	@GetMapping("/hello")
	public ResponseEntity hello(){
		Map message = new HashMap();
		message.put("message", "Hello world");
		return new ResponseEntity(message, HttpStatus.OK);
	}
	public static void main(String[] args) {
		SpringApplication.run(BackendKeycloakK8sApplication.class, args);
	}

}
