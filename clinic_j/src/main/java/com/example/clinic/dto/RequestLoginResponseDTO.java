package com.example.clinic.dto;

import lombok.Data;

@Data
public class RequestLoginResponseDTO {
    private String accType;

    public RequestLoginResponseDTO(String accType) {
        this.accType = accType;
    }

}