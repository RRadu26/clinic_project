package com.example.clinic.controller;

import com.example.clinic.dto.getDoctorsDTO;
import com.example.clinic.dto.getPatientDTO;
import com.example.clinic.dto.getPatientsDTO;
import com.example.clinic.security.JWTGenerator;
import com.example.clinic.service.DoctorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/doctordata")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class getDoctorDataController {
    @Autowired
    DoctorDataService doctorDataService;
    @Autowired
    private JWTGenerator jwtGenerator;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatients")
    public ResponseEntity getPatientList(@RequestBody getPatientsDTO getPatientsDTO, @RequestHeader("Authorization") String auth)  {
        String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
        String email = jwtGenerator.getUsernameFromJWT(token);
        return new ResponseEntity<>(doctorDataService.getMyPatients(email, getPatientsDTO.getName()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatientbyid")
    public ResponseEntity getPatientById(@RequestBody getPatientDTO getPatientsDTO)  {
        return new ResponseEntity<>(doctorDataService.getPatientById(getPatientsDTO.getId()), HttpStatus.OK);
    }

    }
