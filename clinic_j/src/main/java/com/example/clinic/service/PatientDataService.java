package com.example.clinic.service;

import com.example.clinic.dto.ConsultationDTO;
import com.example.clinic.dto.DoctorForListDTO;
import com.example.clinic.dto.FoodProgramDTO;
import com.example.clinic.dto.userDataDTO;

import java.util.List;

public interface PatientDataService {
    userDataDTO getPatientData(String email);
    List<ConsultationDTO> getMyConsultations(String email);

    List<FoodProgramDTO> getMyFoodPrograms(String email);
    List<DoctorForListDTO> getDoctors(String specialization, String name);
}
