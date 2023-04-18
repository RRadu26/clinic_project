package com.example.clinic.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class FoodProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public int getP_code() {
        return p_code;
    }

    public void setP_code(int p_code) {
        this.p_code = p_code;
    }

    public int getD_code() {
        return d_code;
    }

    public void setD_code(int d_code) {
        this.d_code = d_code;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    private String name;
    private String data;
    private int p_code;
    private int d_code;
    private LocalDate date;

}
