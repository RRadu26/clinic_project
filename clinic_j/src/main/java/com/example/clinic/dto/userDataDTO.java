package com.example.clinic.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class userDataDTO {
    String first_name;
    String surname;
    LocalDate birthdate;
    String specialization;
    String education;

    public userDataDTO(String first_name, String surname, LocalDate birthdate, String specialization, String education) {
        this.first_name = first_name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.specialization = specialization;
        this.education = education;
    }
}
