package com.example.clinic.repository;

import com.example.clinic.dto.*;
import com.example.clinic.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByEmail(String email);

    @Query(value = "SELECT * FROM account a WHERE a.email = ?1", nativeQuery = true)
    List<Account> getMyData(String email);
    @Query(value= "SELECT " +
            "new com.example.clinic.dto.ConsultationDTO(c.name, c.c_data, c.diagnosis, CONCAT(d_acc.first_name, ' ',d_acc.surname), c.date) " +
            "FROM " +
            "Consultation c, Account d_acc, Account p_acc " +
            "WHERE " +
            "c.doc_id = d_acc.id AND c.patient_id = p_acc.id AND p_acc.email = ?1", nativeQuery = false)
    List<ConsultationDTO> getMyConsultations(String email);

    @Query(value = "SELECT new com.example.clinic.dto.FoodProgramDTO(prog.name, CONCAT(d.first_name, ' ', d.surname),prog.data, prog.date)" +
            "FROM FoodProgram prog, Account p, Account d " +
            "WHERE prog.d_code=d.id AND prog.p_code = p.id AND p.email = ?1")
    List<FoodProgramDTO> getMyFoodPrograms(String email);

    @Query(value = "SELECT new com.example.clinic.dto.DoctorForListDTO(d.id ,CONCAT(d.first_name, ' ', d.surname), d.specialization)" +
            "FROM Account d " +
            "WHERE d.accType = 2 ")
    List<DoctorForListDTO> getAllDoctors();

    @Query(value = "SELECT new com.example.clinic.dto.DoctorForListDTO(d.id ,CONCAT(d.first_name, ' ', d.surname), d.specialization)" +
            "FROM Account d " +
            "WHERE d.accType = 2 AND CONCAT(d.first_name, ' ', d.surname) LIKE %?1%")
    List<DoctorForListDTO> getNamedDoctors(String name);

    @Query(value = "SELECT new com.example.clinic.dto.DoctorForListDTO(d.id ,CONCAT(d.first_name, ' ', d.surname), d.specialization)" +
            "FROM Account d " +
            "WHERE d.accType = 2 AND d.specialization = ?1")
    List<DoctorForListDTO> getSpecialisedDoctors(String specialization);
    @Query(value = "SELECT new com.example.clinic.dto.DoctorForListDTO(d.id ,CONCAT(d.first_name, ' ', d.surname), d.specialization)" +
            "FROM Account d " +
            "WHERE d.accType = 2 AND CONCAT(d.first_name, ' ', d.surname) LIKE %?1% AND d.specialization = ?2")
    List<DoctorForListDTO> getNamedSpecialisedDoctors(String name, String specialization);

    @Query(value= "SELECT new com.example.clinic.dto.PatientForListDTO(p.id, CONCAT(p.first_name, ' ', p.surname), p.birthdate)" +
            "FROM Account p, Account d, PatientDoctor pd WHERE pd.d_id = d.id AND pd.p_id = p.id AND d.email = ?1")
    List<PatientForListDTO> getAllMyPatients(String email);

    @Query(value= "SELECT new com.example.clinic.dto.PatientForListDTO(p.id, CONCAT(p.first_name, ' ', p.surname), p.birthdate)" +
            "FROM Account p, Account d, PatientDoctor pd WHERE pd.d_id = d.id AND pd.p_id = p.id AND d.email = ?1 " +
            "AND CONCAT(p.first_name, ' ', p.surname) LIKE %?2%")
    List<PatientForListDTO> getNamedPatients(String email, String name);

    @Query(value= "SELECT new com.example.clinic.dto.PatientForListDTO(p.id, CONCAT(p.first_name, ' ', p.surname), p.birthdate)" +
            "FROM Account p WHERE p.id=?1 ")
    PatientForListDTO getPatientById(int id);
    @Query(value= "SELECT " +
            "new com.example.clinic.dto.ConsultationDTO(c.name, c.c_data, c.diagnosis, CONCAT(d_acc.first_name, ' ',d_acc.surname), c.date) " +
            "FROM " +
            "Consultation c, Account d_acc, Account p_acc " +
            "WHERE " +
            "c.doc_id = d_acc.id AND c.patient_id = p_acc.id AND p_acc.id = ?1", nativeQuery = false)
    List<ConsultationDTO> getPatientConsultations(int id);
    @Query(value = "SELECT new com.example.clinic.dto.FoodProgramDTO(prog.name, CONCAT(d.first_name, ' ', d.surname),prog.data, prog.date)" +
            "FROM FoodProgram prog, Account p, Account d " +
            "WHERE prog.d_code=d.id AND prog.p_code = p.id AND p.id = ?1")
    List<FoodProgramDTO> getPatientFoodPrograms(int id);
}
