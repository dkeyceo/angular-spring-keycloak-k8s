package com.dkey.backend.keycloak.k8s.controller;

import com.dkey.backend.keycloak.k8s.service.KeycloakService;
import com.dkey.backend.keycloak.k8s.dto.ResponseMessage;
import com.dkey.backend.keycloak.k8s.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private KeycloakService keycloakService;

    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> create(@RequestBody User user){
        Object[] obj = keycloakService.createUser(user);
        int status = (int) obj[0];
        ResponseMessage message = (ResponseMessage) obj[1];
        return ResponseEntity.status(status).body(message);
    }
}