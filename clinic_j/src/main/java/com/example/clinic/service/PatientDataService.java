package com.example.clinic.service;

import com.example.clinic.dto.*;

import java.util.List;

public interface PatientDataService {
    userDataDTO getPatientData(String email);
    List<ConsultationDTO> getMyConsultations(String email);

    List<FoodProgramDTO> getMyFoodPrograms(String email);
    List<DoctorForListDTO> getDoctors(String specialization, String name);

    List<ReceiptDTO> getMyReceipts(String email);
}
