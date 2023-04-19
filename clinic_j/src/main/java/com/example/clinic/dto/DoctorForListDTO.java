package com.example.clinic.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DoctorForListDTO {
    private int id;
    private String name;
    private String specialization;
    private String education;
    private LocalDate birthdate;
    public DoctorForListDTO(int id, String name, String specialization, String education, LocalDate birthdate) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.education = education;
        this.birthdate = birthdate;
    }

    public DoctorForListDTO(int id, String name, String specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.birthdate = null;
        this.education = null;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
}
