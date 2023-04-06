package com.example.clinic.controller;

import com.example.clinic.dto.DoctorDTO;
import com.example.clinic.dto.PatientDTO;
import com.example.clinic.model.Account;
import com.example.clinic.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/adddoctor")
    public ResponseEntity adddoctor(@RequestBody DoctorDTO doctorDTO) {
        try {
            Account account = new Account();

            account.setEmail(doctorDTO.getEmail());
            account.setPassword(doctorDTO.getPassword());
            account.setFirst_name(doctorDTO.getFirst_name());
            account.setSurname(doctorDTO.getSurname());
            account.setBirthdate(doctorDTO.getBirthdate());

            account.setEducation(doctorDTO.getEducation());
            account.setSpecialization(doctorDTO.getSpecialization());
            account.setDoccode(doctorDTO.getDoccode());

            account.setAccType(2);

            accountService.saveAccount(account);

        } catch (RuntimeException e) {
            if(e.getMessage().equals("User_exists"))
                return new ResponseEntity<>("UserExists", HttpStatus.BAD_REQUEST);
            else if(e.getMessage().equals("Bad_doccode"))
                return new ResponseEntity<>("UserExists", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Saved", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/addpatient")
    public ResponseEntity addpatient(@RequestBody PatientDTO patientDTO) {
        try {
            Account account = new Account();

            account.setEmail(patientDTO.getEmail());
            account.setPassword(patientDTO.getPassword());
            account.setFirst_name(patientDTO.getFirst_name());
            account.setSurname(patientDTO.getSurname());
            account.setBirthdate(patientDTO.getBirthdate());

            account.setEducation(null);
            account.setSpecialization(null);
            account.setDoccode(null);
            account.setAccType(1);

            accountService.saveAccount(account);

        } catch (RuntimeException e) {
            if(e.getMessage().equals("User_exists"))
                return new ResponseEntity<>("UserExists", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Saved", HttpStatus.BAD_REQUEST);
    }
}
