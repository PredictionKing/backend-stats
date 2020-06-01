package com.riftboss.analyzer.Repository;

import com.riftboss.analyzer.Entity.APIKey;
import org.springframework.data.jpa.repository.JpaRepository;


public interface APIKeyRepos extends JpaRepository<APIKey, Integer> {

}
