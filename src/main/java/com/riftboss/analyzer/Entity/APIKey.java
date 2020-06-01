package com.riftboss.analyzer.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class APIKey {

    private String apiKey;
    @Id
    private Integer id;

    public APIKey() {
    }

    public APIKey(String apiKey, int id) {
        this.apiKey = apiKey;
        this.id = id;
    }

    public String getApiKey() {
        return apiKey;
    }


    public int getId() {
        return id;
    }

}
