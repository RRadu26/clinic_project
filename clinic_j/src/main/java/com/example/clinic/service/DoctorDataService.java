package com.example.clinic.service;

import com.example.clinic.dto.ConsultationDTO;
import com.example.clinic.dto.FoodProgramDTO;
import com.example.clinic.dto.PatientForListDTO;
import com.example.clinic.model.Consultation;
import com.example.clinic.model.FoodProgram;

import java.util.List;

public interface DoctorDataService {
    List<PatientForListDTO> getMyPatients(String email,String name);

    PatientForListDTO getPatientById(int id);

    List<ConsultationDTO> getPatientConsultations(int id);

    List<FoodProgramDTO> getPatientFoodPrograms(int id);

    Consultation saveConsultation(Consultation consultation);
    FoodProgram saveFoodProgram(FoodProgram foodProgram);
}
