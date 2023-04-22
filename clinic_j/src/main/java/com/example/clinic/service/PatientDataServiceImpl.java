package com.example.clinic.service;

import com.example.clinic.dto.*;
import com.example.clinic.model.Account;
import com.example.clinic.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientDataServiceImpl implements PatientDataService{

    @Autowired
    AccountRepository accountRepository;
    @Override
    public userDataDTO getPatientData(String email) {
        Account acc = accountRepository.getMyData(email).get(0);
        userDataDTO ret = new userDataDTO(acc.getId(), acc.getFirst_name(), acc.getSurname(), acc.getBirthdate(), acc.getSpecialization(), acc.getEducation());
        return ret;
    }
    @Override
    public List<ConsultationDTO> getMyConsultations(String email) {
        return accountRepository.getMyConsultations(email);
    }

    @Override
    public List<FoodProgramDTO> getMyFoodPrograms(String email) {
        return accountRepository.getMyFoodPrograms(email);
    }

    @Override
    public List<DoctorForListDTO> getDoctors(String specialization, String name) {
        if(specialization == null && name == null) {
            return accountRepository.getAllDoctors();
        }
        if(specialization != null && name != null) {
            return accountRepository.getNamedSpecialisedDoctors(name, specialization);
        }
        if(specialization != null) {
            return accountRepository.getSpecialisedDoctors(specialization);
        }
        if(name != null) {
            return accountRepository.getNamedDoctors(name);
        }
        return null;
    }
    @Override
    public List<ReceiptDTO> getMyReceipts(String email) {
        ArrayList<ReceiptDTO> receipts = (ArrayList<ReceiptDTO>) accountRepository.getMyReceipts(email);
        for(int i = 0; i < receipts.size(); i++) {
            receipts.get(i).setDrugs(accountRepository.getReceiptDrugs(receipts.get(i).getCode()));
        }
        return receipts;
    }

}
