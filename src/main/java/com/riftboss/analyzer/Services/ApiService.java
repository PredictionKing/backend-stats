package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.APIKey;
import com.riftboss.analyzer.Repository.APIKeyRepos;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ApiService {

    private final APIKeyRepos apiKeyRepos;

    public ApiService(APIKeyRepos apiKeyRepos) {
        this.apiKeyRepos = apiKeyRepos;
    }

    public void updateKey(String key){
        this.apiKeyRepos.save(new APIKey(key, 0));
    }

    public String getCurrentApiKey(){
        return this.apiKeyRepos.findById(0).orElseThrow().getApiKey();
    }
}
