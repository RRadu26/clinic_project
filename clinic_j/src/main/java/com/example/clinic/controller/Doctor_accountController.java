package com.example.clinic.controller;

import com.example.clinic.model.Doctor_account;
import com.example.clinic.service.Doctor_accountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Doctor_accountController {
    @Autowired
    private Doctor_accountService doctor_accountService;

    @PostMapping("/adddoctor")
    public String add(@RequestBody Doctor_account doctor_account) {
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
