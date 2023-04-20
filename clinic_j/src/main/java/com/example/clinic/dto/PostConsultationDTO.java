package com.example.clinic.dto;

import java.time.LocalDate;

public class PostConsultationDTO {
    private String name;
    private String c_data;
    private String diagnosis;
    private LocalDate date;
    private int patient_id;
    private int doc_id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getC_data() {
        return c_data;
    }

    public void setC_data(String c_data) {
        this.c_data = c_data;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getPatient_id() {
        return patient_id;
    }

    public void setPatient_id(int patient_id) {
        this.patient_id = patient_id;
    }

    public int getDoc_id() {
        return doc_id;
    }

    public void setDoc_id(int doc_id) {
        this.doc_id = doc_id;
    }
}
