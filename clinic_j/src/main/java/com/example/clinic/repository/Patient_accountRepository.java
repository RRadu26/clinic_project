package com.example.clinic.repository;

import com.example.clinic.model.Patient_account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Patient_accountRepository extends JpaRepository<Patient_account, Integer> {
    Patient_account findByEmail(String email);
}
