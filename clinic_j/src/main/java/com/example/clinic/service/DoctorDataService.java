package com.example.clinic.service;

import com.example.clinic.dto.PatientForListDTO;

import java.util.List;

public interface DoctorDataService {
    List<PatientForListDTO> getMyPatients(String email,String name);

    PatientForListDTO getPatientById(int id);

}
