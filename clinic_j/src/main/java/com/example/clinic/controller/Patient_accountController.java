package com.example.clinic.controller;

import com.example.clinic.model.Patient_account;
import com.example.clinic.service.Patient_accountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patientaccount")
public class Patient_accountController {
    @Autowired
    private Patient_accountService patient_accountService;

    @PostMapping("/add")
    public String add(@RequestBody Patient_account patient_account) {
        try {
            patient_accountService.savePatient_account(patient_account);
        } catch (RuntimeException e) {
            return "User already exists";
        }
        return "Saved";
    }

}