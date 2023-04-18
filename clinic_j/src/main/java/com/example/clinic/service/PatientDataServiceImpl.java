package com.example.clinic.service;

import com.example.clinic.dto.ConsultationDTO;
import com.example.clinic.dto.DoctorForListDTO;
import com.example.clinic.dto.FoodProgramDTO;
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
        Account acc = accountRepository.getMyData(email).get(0);
        userDataDTO ret = new userDataDTO(acc.getFirst_name(), acc.getSurname(), acc.getBirthdate(), acc.getSpecialization(), acc.getEducation());
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
        if(specialization == null & name == null) {
            return accountRepository.getAllDoctors();
        }
        return null;
    }

}
