package com.riftboss.analyzer.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MapsInfo {

    @Id
   private int mapId;
   private String mapName;
   private String notes;

    public MapsInfo(int mapId, String mapName, String notes) {
        this.mapId = mapId;
        this.mapName = mapName;
        this.notes = notes;
    }

    public MapsInfo() {
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
