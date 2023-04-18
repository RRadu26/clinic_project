package com.example.clinic.repository;

import com.example.clinic.dto.ConsultationDTO;
import com.example.clinic.dto.DoctorForListDTO;
import com.example.clinic.dto.FoodProgramDTO;
import com.example.clinic.dto.userDataDTO;
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
            "c.doc_id = d_acc.id AND c.patient_id = p_acc.id", nativeQuery = false)
    List<ConsultationDTO> getMyConsultations(String email);

    @Query(value = "SELECT new com.example.clinic.dto.FoodProgramDTO(prog.name, CONCAT(d.first_name, ' ', d.surname),prog.data, prog.date)" +
            "FROM FoodProgram prog, Account p, Account d " +
            "WHERE prog.d_code=d.id AND prog.p_code = p.id AND p.id = 2")
    List<FoodProgramDTO> getMyFoodPrograms(String email);

    @Query(value = "SELECT new com.example.clinic.dto.DoctorForListDTO(d.id ,CONCAT(d.first_name, ' ', d.surname), d.specialization)" +
            "FROM Account d " +
            "WHERE d.accType = 2 ")
    List<DoctorForListDTO> getAllDoctors();
}
