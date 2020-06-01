package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.SummonerInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SummonerService {

    private final RestTemplate restTemplate;
    private ApiService apiService;

    public SummonerService(RestTemplate restTemplate, ApiService apiService) {
        this.restTemplate = restTemplate;
        this.apiService = apiService;
    }

    public SummonerInfo getSummonerInfo(String name){
        String apiKey = this.apiService.getCurrentApiKey();
        return this.restTemplate.getForObject("/summoner/v4/summoners/by-name/{name}?api_key={apiKey}", SummonerInfo.class, name, apiKey);
    }
}
