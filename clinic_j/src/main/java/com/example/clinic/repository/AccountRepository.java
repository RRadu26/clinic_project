package com.example.clinic.repository;

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
    List<Account> getData(String email);

}
