package com.riftboss.analyzer.Entity.Game;

import com.riftboss.analyzer.Player;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class ParticipantIdentityInfo {

   private int participantId;
   private PlayerInfo player;

    public int getParticipantId() {
        return participantId;
    }

    public void setParticipantId(int participantId) {
        this.participantId = participantId;
    }

    public PlayerInfo getPlayer() {
        return player;
    }

    public void setPlayer(PlayerInfo player) {
        this.player = player;
    }
}
