package com.example.clinic.dto;

import lombok.Data;

@Data
public class DrugDTO {

    public DrugDTO(String name, String specifications) {
        this.name = name;
        this.specifications = specifications;
    }

    private String name;
    private String specifications;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }
}
