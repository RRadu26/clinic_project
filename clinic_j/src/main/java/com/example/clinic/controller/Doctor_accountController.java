package com.example.clinic.controller;

import com.example.clinic.model.Doctor_account;
import com.example.clinic.model.Patient_account;
import com.example.clinic.service.Doctor_accountService;
import com.example.clinic.service.Patient_accountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctoraccount")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Doctor_accountController {
    @Autowired
    private Doctor_accountService doctor_accountService;

    @PostMapping("/add")
    public String add(@RequestBody Doctor_account doctor_account) {
        try {
            doctor_accountService.saveDoctor_account(doctor_account);
        } catch (RuntimeException e) {
            return "UserExists";
        }
        return "Saved";
    }
}
