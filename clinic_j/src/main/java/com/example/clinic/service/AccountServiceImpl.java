package com.example.clinic.service;

import com.example.clinic.model.Account;
import com.example.clinic.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepository accountRepository;
    @Override
    public Account saveAccount(Account account) {
        if(accountRepository.findByEmail(account.getEmail()) != null) {
            throw new RuntimeException("User_exists");
        }
        if(account.getAccType() == 2) {
            if (!(account.getDoccode().equals("aaaaaaaaaaaa")))
                throw new RuntimeException(("Bad_doccode"));
        }
        return accountRepository.save(account);
    }
}
