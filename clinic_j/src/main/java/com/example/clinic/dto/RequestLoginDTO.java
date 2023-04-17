package com.example.clinic.dto;

import lombok.Data;

@Data
public class RequestLoginDTO {
    private String accessToken;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
