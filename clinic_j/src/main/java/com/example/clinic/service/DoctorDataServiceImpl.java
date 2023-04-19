package com.example.clinic.service;

import com.example.clinic.dto.PatientForListDTO;
import com.example.clinic.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorDataServiceImpl implements DoctorDataService{
    @Autowired
    AccountRepository accountRepository;
    @Override
    public List<PatientForListDTO> getMyPatients(String email, String name) {
        if(name == null) {
            return accountRepository.getAllMyPatients(email);
        }
            return accountRepository.getNamedPatients(email, name);

    }

    @Override
    public PatientForListDTO getPatientById(int id) {
        return accountRepository.getPatientById(id);
    }
}
