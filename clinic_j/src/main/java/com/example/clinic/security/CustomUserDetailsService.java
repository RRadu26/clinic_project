package com.example.clinic.security;

import com.example.clinic.model.Doctor_account;
import com.example.clinic.model.Patient_account;
import com.example.clinic.repository.Doctor_accountRespository;
import com.example.clinic.repository.Patient_accountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;


@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    Patient_accountRepository patientAccountRepository;
    @Autowired
    Doctor_accountRespository doctorAccountRespository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Patient_account patient_account= patientAccountRepository.findByEmail(email);

        if(patient_account != null) {
            return new User(patient_account.getEmail(), patient_account.getPassword(), mapRolesToAuthorities(1));
        }

        Doctor_account doctor_account= doctorAccountRespository.findByEmail(email);
        if(doctor_account != null) {
            return new User(doctor_account.getEmail(), doctor_account.getPassword(), mapRolesToAuthorities(2));
        }
        throw new RuntimeException("nouserfound");

    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(int role) {
        Collection<GrantedAuthority> collection = new ArrayList<>();
        if(role == 1)
            collection.add(new SimpleGrantedAuthority("Patient"));
        else if(role == 2)
            collection.add(new SimpleGrantedAuthority("Doctor"));
        return collection;
    }
}

