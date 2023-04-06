package com.example.clinic.dto;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String accType;
    public AuthResponseDTO(String accessToken, String acctype ){
        this.accessToken = accessToken;
        this.accType = acctype;
    }
}