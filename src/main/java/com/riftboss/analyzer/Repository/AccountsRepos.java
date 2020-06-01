package com.riftboss.analyzer.Repository;

import com.riftboss.analyzer.Entity.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccountsRepos extends JpaRepository<Accounts, Integer> {

    List<Accounts> findAccountsByIngameContains(String search);
    List<Accounts> findAccountsByIngame(String name);

    @Modifying
    @Query("UPDATE Accounts acc SET acc.Flex = ?2, acc.Solo = ?3 WHERE acc.accountID = ?1")
    Integer updateAccount(Integer accountID, Boolean Flex, Boolean Solo);
}
