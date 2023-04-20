package com.example.clinic.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class PostFoodProgramDTO {

    private String name;
    private String data;
    private int p_code;
    private int d_code;
    private LocalDate date;
}
