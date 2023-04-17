package com.example.clinic.controller;

import com.example.clinic.dto.AuthResponseDTO;
import com.example.clinic.dto.LoginDto;
import com.example.clinic.dto.RequestLoginDTO;
import com.example.clinic.dto.RequestLoginResponseDTO;
import com.example.clinic.security.JWTGenerator;
import io.jsonwebtoken.JwtBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTGenerator jwtGenerator;

    public AuthController(AuthenticationManager authenticationManager, JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.jwtGenerator = jwtGenerator;
    }

    @PreAuthorize(("permitAll"))
    @PostMapping("/logme")
    public ResponseEntity add(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getEmail(),
                        loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        ArrayList<SimpleGrantedAuthority> authoritieslist= new ArrayList<>((Collection<SimpleGrantedAuthority>) SecurityContextHolder.getContext().getAuthentication().getAuthorities());
        String token = jwtGenerator.generateToken(authentication, authoritieslist.get(0).toString());

        return new ResponseEntity<>(new AuthResponseDTO(token, authoritieslist.get(0).toString()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("permitAll"))
    @PostMapping("/getacctype")
    public ResponseEntity getacc(@RequestBody RequestLoginDTO loginDto) {
        if(jwtGenerator.validateToken(loginDto.getAccessToken()))
            return new ResponseEntity<>( HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
