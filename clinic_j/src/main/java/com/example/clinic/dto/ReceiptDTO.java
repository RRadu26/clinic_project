package com.example.clinic.dto;

import java.time.LocalDate;
import java.util.List;

public class ReceiptDTO {
    private int code;
    private String d_name;
    private String name;
    private String observations;
    private LocalDate date;
    private List<DrugDTO> drugs = null;

    public ReceiptDTO(int code, String d_name, String name, String observations, LocalDate date) {
        this.code = code;
        this.d_name = d_name;
        this.name = name;
        this.observations = observations;
        this.date = date;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getD_name() {
        return d_name;
    }

    public void setD_name(String d_name) {
        this.d_name = d_name;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<DrugDTO> getDrugs() {
        return drugs;
    }

    public void setDrugs(List<DrugDTO> drugs) {
        this.drugs = drugs;
    }
}
