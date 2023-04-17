package com.example.clinic.service;

import com.example.clinic.dto.userDataDTO;

public interface PatientDataService {
    userDataDTO getPatientData(String email);
}
