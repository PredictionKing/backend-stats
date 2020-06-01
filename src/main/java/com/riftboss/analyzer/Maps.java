package com.riftboss.analyzer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Maps {

    private int mapId;
    private String mapName;
    private String notes;

    public Maps(int mapId, String mapName, String notes) {
        this.mapId = mapId;
        this.mapName = mapName;
        this.notes = notes;
    }

    public Maps() {
    }

    public int getMapId() {
        return mapId;
    }

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    public String getMapName() {
        return mapName;
    }

    public void setMapName(String mapName) {
        this.mapName = mapName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
