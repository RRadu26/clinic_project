package com.example.clinic.dto;

import java.time.LocalDate;
import java.util.List;

public class POSTReceiptDTO {
    private int d_code;
    private int p_code;
    private LocalDate date;
    private String name;
    private String observations;
    private List<DrugDTO> drugs;

    public int getD_code() {
        return d_code;
    }

    public void setD_code(int d_code) {
        this.d_code = d_code;
    }

    public int getP_code() {
        return p_code;
    }

    public void setP_code(int p_code) {
        this.p_code = p_code;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }

    public List<DrugDTO> getDrugs() {
        return drugs;
    }

    public void setDrugs(List<DrugDTO> drugs) {
        this.drugs = drugs;
    }
}
