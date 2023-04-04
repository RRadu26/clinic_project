package com.example.clinic.controller;

import com.example.clinic.dto.LoginDto;
import com.example.clinic.model.Doctor_account;
import com.example.clinic.service.Doctor_accountService;
import com.example.clinic.service.Patient_accountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
    @Autowired
    private Doctor_accountService doctor_accountService;
    @Autowired
    private Patient_accountService patient_accountService;
    @GetMapping("/logme")
    public ResponseEntity add(@RequestBody LoginDto loginDto) {
        try {
            doctor_accountService.saveDoctor_account(doctor_account);
        } catch (RuntimeException e) {
            if(e.getMessage().equals("User_exists"))
                return "UserExists";
            else if(e.getMessage().equals("Bad_doccode"))
                return("BadDoccode");
        }
        return "Saved";
    }
}
