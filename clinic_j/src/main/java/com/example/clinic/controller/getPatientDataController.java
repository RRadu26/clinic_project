package com.example.clinic.controller;

import com.example.clinic.dto.RequestLoginDTO;
import com.example.clinic.dto.getDoctorsDTO;
import com.example.clinic.security.JWTGenerator;
import com.example.clinic.service.PatientDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patientdata")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class getPatientDataController {
    @Autowired
    private PatientDataService patientDataService;

    @Autowired
    private JWTGenerator jwtGenerator;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize("hasAnyAuthority('Doctor', 'Patient')")
    @GetMapping("/mydata")
    public ResponseEntity getmydata(@RequestHeader("Authorization") String auth) {
            String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
            String email = jwtGenerator.getUsernameFromJWT(token);
            return new ResponseEntity<>(patientDataService.getPatientData(email),HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Patient')"))
    @GetMapping("/myconsultations")
    public ResponseEntity getmyconsultations(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
        String email = jwtGenerator.getUsernameFromJWT(token);
        return new ResponseEntity<>(patientDataService.getMyConsultations(email), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Patient')"))
    @GetMapping("/myfoodprograms")
    public ResponseEntity getmyfoodprograms(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
        String email = jwtGenerator.getUsernameFromJWT(token);
        return new ResponseEntity<>(patientDataService.getMyFoodPrograms(email), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Patient')"))
    @GetMapping("/myreceipts")
    public ResponseEntity getmyreceipts(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
        String email = jwtGenerator.getUsernameFromJWT(token);
        return new ResponseEntity<>(patientDataService.getMyReceipts(email), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Patient')"))
    @PostMapping("/getdoctors")
    public ResponseEntity getdoctorslist(@RequestBody getDoctorsDTO getDoctorsDTO) {
        return new ResponseEntity<>(patientDataService.getDoctors(getDoctorsDTO.getSpecialization(), getDoctorsDTO.getName()), HttpStatus.OK);
    }
}
