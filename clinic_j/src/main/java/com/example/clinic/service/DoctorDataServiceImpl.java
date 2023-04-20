package com.example.clinic.service;

import com.example.clinic.dto.ConsultationDTO;
import com.example.clinic.dto.FoodProgramDTO;
import com.example.clinic.dto.PatientForListDTO;
import com.example.clinic.model.Consultation;
import com.example.clinic.model.FoodProgram;
import com.example.clinic.repository.AccountRepository;
import com.example.clinic.repository.ConsultationRepository;
import com.example.clinic.repository.FoodProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorDataServiceImpl implements DoctorDataService{
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    ConsultationRepository consultationRepository;
    @Autowired
    FoodProgramRepository foodProgramRepository;
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

    @Override
    public List<ConsultationDTO> getPatientConsultations(int id) {
        return accountRepository.getPatientConsultations(id);
    }

    @Override
    public List<FoodProgramDTO> getPatientFoodPrograms(int id) {
        return accountRepository.getPatientFoodPrograms(id);
    }

    @Override
    public Consultation saveConsultation(Consultation consultation) {
        return consultationRepository.save(consultation);
    }

    @Override
    public FoodProgram saveFoodProgram(FoodProgram foodProgram) {
        return foodProgramRepository.save(foodProgram);
    }
}
