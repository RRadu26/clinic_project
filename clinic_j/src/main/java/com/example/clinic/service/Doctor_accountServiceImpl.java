package com.example.clinic.service;

import com.example.clinic.model.Doctor_account;
import com.example.clinic.repository.Doctor_accountRespository;
import com.example.clinic.repository.Patient_accountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Doctor_accountServiceImpl implements Doctor_accountService{
    @Autowired
    Doctor_accountRespository doctorAccountRespository;
    @Autowired
    Patient_accountRepository patientAccountRepository;

    @Override
    public Doctor_account saveDoctor_account(Doctor_account doctor_account) {
        if(doctorAccountRespository.findByEmail(doctor_account.getEmail()) != null) {
            throw new RuntimeException("User_exists");
        }
        if(patientAccountRepository.findByEmail(doctor_account.getEmail()) != null) {
            throw new RuntimeException("User_exists");
        }

        if(!(doctor_account.getDoccode().equals("aaaaaaaaaaaa")))
            throw new RuntimeException(("Bad_doccode"));
        return doctorAccountRespository.save(doctor_account);
    }
}
