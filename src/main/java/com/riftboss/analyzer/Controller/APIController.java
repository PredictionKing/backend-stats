package com.riftboss.analyzer.Controller;

import com.riftboss.analyzer.Services.ApiService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
public class APIController {


    private final ApiService apiService;

    public APIController(ApiService apiService) {
        this.apiService = apiService;
    }

    @Transactional
    @PostMapping(
            path= "/key",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> updateApiKey(@RequestBody String key){
        this.apiService.updateKey(key);
        return ResponseEntity.ok().build();
    }
}
