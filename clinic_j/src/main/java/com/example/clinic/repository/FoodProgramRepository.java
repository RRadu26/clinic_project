package com.example.clinic.repository;

import com.example.clinic.model.FoodProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodProgramRepository extends JpaRepository<FoodProgram, Integer> {
}
