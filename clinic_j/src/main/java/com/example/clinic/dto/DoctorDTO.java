package com.example.clinic.dto;

import java.time.LocalDate;

public class DoctorDTO {
    private int id;
    private String email;
    private String password;
    private String first_name;

    private String surname;
    private LocalDate birthdate;
    private String education;
    private String specialization;
    private String doccode;
    private int accType;

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getSurname() {
        return surname;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public String getEducation() {
        return education;
    }

    public String getSpecialization() {
        return specialization;
    }

    public String getDoccode() {
        return doccode;
    }

    public int getAccType() {
        return accType;
    }
}
