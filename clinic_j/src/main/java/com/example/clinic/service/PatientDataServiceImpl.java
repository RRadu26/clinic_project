package com.example.clinic.service;

import com.example.clinic.dto.userDataDTO;
import com.example.clinic.model.Account;
import com.example.clinic.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientDataServiceImpl implements PatientDataService{

    @Autowired
    AccountRepository accountRepository;
    @Override
    public userDataDTO getPatientData(String email) {
        Account acc = accountRepository.getData(email).get(0);
        userDataDTO ret = new userDataDTO(acc.getFirst_name(), acc.getSurname(), acc.getBirthdate(), acc.getSpecialization(), acc.getEducation());
        return ret;
    }
}
