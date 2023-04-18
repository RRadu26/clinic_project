package com.example.clinic.dto;

import java.time.LocalDate;

public class FoodProgramDTO {
    private String name;
    private String d_name;
    private String data;
    private LocalDate date;

    public FoodProgramDTO(String name, String d_name, String data, LocalDate date) {
        this.name = name;
        this.d_name = d_name;
        this.data = data;
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getD_name() {
        return d_name;
    }

    public void setD_name(String d_name) {
        this.d_name = d_name;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
