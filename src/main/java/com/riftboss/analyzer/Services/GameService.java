package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.Game.GameInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GameService {

    private final RestTemplate restTemplate;
    private ApiService apiService;

    public GameService(RestTemplate restTemplate, ApiService apiService) {
        this.restTemplate = restTemplate;
        this.apiService = apiService;
    }

    public GameInfo getGame(String matchId){
        String apiKey = this.apiService.getCurrentApiKey();

        return this.restTemplate.getForObject("/match/v4/matches/{matchId}?api_key={apiKey}", GameInfo.class, matchId, apiKey);
    }
}
