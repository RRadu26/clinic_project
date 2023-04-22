package com.example.clinic.repository;

import com.example.clinic.model.Drugs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrugRepository extends JpaRepository<Drugs, Integer> {
}
