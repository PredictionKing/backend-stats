package com.riftboss.analyzer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.riftboss.analyzer.Entity.Game.PlayerInfo;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ParticipantIdentity {
    private int participantId;
    private List<Player> player;

    public int getParticipantId() {
        return participantId;
    }

    public void setParticipantId(int participantId) {
        this.participantId = participantId;
    }

    public List<Player> getPlayer() {
        return player;
    }

    public void setPlayer(List<Player> player) {
        this.player = player;
    }
}
