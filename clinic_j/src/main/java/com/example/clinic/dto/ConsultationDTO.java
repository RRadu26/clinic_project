package com.example.clinic.dto;

import lombok.Data;

import java.time.LocalDate;
@Data
public class ConsultationDTO {
    private String name;
    private String c_data;
    private String diagnosis;
    private LocalDate date;
    private String d_name;

    public ConsultationDTO(String name, String c_data, String diagnosis, String d_name, LocalDate date) {
        this.name = name;
        this.c_data = c_data;
        this.diagnosis = diagnosis;
        this.d_name = d_name;
        this.date = date;
    }

    public ConsultationDTO() {

    }

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

    public String getD_name() {
        return d_name;
    }

    public void setD_name(String d_name) {
        this.d_name = d_name;
    }
}
