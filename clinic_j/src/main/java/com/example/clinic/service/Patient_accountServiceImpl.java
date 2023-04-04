package com.example.clinic.service;

import com.example.clinic.model.Patient_account;
import com.example.clinic.repository.Patient_accountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Patient_accountServiceImpl implements Patient_accountService{
    @Autowired
    private Patient_accountRepository patient_accountRepository;
    @Override
    public Patient_account savePatient_account(Patient_account patient_account) {
        if(patient_accountRepository.findByEmail(patient_account.getEmail()) != null) {
            throw new RuntimeException("User_exists");
        }
        return patient_accountRepository.save(patient_account);
    }
}
