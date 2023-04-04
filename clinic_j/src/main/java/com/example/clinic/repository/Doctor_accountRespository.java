package com.example.clinic.repository;

import com.example.clinic.model.Doctor_account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Doctor_accountRespository extends JpaRepository<Doctor_account, Integer> {
    Doctor_account findByEmail(String email);
}
