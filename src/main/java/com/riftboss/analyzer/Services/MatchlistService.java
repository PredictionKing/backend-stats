package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.MatchlistInfo;
import com.riftboss.analyzer.Entity.SummonerInfo;
import com.riftboss.analyzer.Matchlist;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MatchlistService {

    private final RestTemplate restTemplate;
    private ApiService apiService;
    private SummonerService summonerService;

    public MatchlistService(RestTemplate restTemplate, ApiService apiService, SummonerService summonerService) {
        this.restTemplate = restTemplate;
        this.apiService = apiService;
        this.summonerService = summonerService;
    }

    public MatchlistInfo getMatchlist(String name){
        String id = this.summonerService.getSummonerInfo(name).getAccountId();
        String apiKey = this.apiService.getCurrentApiKey();
        return this.restTemplate.getForObject("/match/v4/matchlists/by-account/{id}?api_key={apiKey}", MatchlistInfo.class, id, apiKey);
    }
}
