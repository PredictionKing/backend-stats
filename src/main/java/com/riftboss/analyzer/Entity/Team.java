package com.riftboss.analyzer.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Team {
    @Id
    private Integer PlayerID;
    private String Name;
    private String Position;
    private String Ingame;

    public Team(){

    }

    public Integer getPlayerID() {
        return PlayerID;
    }

    public String getName() {
        return Name;
    }

    public String getPosition() {
        return Position;
    }

    public String getIngame() {
        return Ingame;
    }

    public void setPlayerID(Integer playerID) {
        PlayerID = playerID;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setPosition(String position) {
        Position = position;
    }

    public void setIngame(String ingame) {
        Ingame = ingame;
    }
}
