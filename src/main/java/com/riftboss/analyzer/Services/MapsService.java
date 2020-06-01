package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.MapsInfo;
import com.riftboss.analyzer.Entity.QueuesInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MapsService {

    private final RestTemplate restTemplate;

    public MapsService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<MapsInfo> getMaps(){
        List<MapsInfo> infos = new ArrayList<MapsInfo>();
        restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory("http://static.developer.riotgames.com/docs/lol/"));
        infos.addAll(Arrays.asList(this.restTemplate.getForObject("maps.json", MapsInfo[].class)));
        return infos;
    }
}
