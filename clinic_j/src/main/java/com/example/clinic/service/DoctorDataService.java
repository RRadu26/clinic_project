package com.example.clinic.service;

import com.example.clinic.dto.*;
import com.example.clinic.model.Consultation;
import com.example.clinic.model.Drugs;
import com.example.clinic.model.FoodProgram;
import com.example.clinic.model.Receipt;

import java.util.List;

public interface DoctorDataService {
    List<PatientForListDTO> getMyPatients(String email,String name);

    PatientForListDTO getPatientById(int id);

    List<ConsultationDTO> getPatientConsultations(int id);

    List<FoodProgramDTO> getPatientFoodPrograms(int id);

    Consultation saveConsultation(Consultation consultation);
    FoodProgram saveFoodProgram(FoodProgram foodProgram);
    Receipt saveReceipt(Receipt receipt);
    Drugs saveDrugs(Drugs drugs);
    List<ReceiptDTO> getPatientReceipts(int id);


}
