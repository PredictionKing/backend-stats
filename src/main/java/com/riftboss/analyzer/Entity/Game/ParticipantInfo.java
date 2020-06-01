package com.riftboss.analyzer.Entity.Game;

import com.riftboss.analyzer.ParticipantStats;
import com.riftboss.analyzer.ParticipantTimeline;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class ParticipantInfo {

   private int participantId;
   private int championId;
   private ParticipantStatsInfo stats;
   private int teamId;
   private int spell1Id;
   private int spell2Id;
   private String highestAchievedSeasonTier;
   private ParticipantTimelineInfo timeline;

    public int getParticipantId() {
        return participantId;
    }

    public void setParticipantId(int participantId) {
        this.participantId = participantId;
    }

    public int getChampionId() {
        return championId;
    }

    public void setChampionId(int championId) {
        this.championId = championId;
    }

    public ParticipantStatsInfo getStats() {
        return stats;
    }

    public void setStats(ParticipantStatsInfo stats) {
        this.stats = stats;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public int getSpell1Id() {
        return spell1Id;
    }

    public void setSpell1Id(int spell1Id) {
        this.spell1Id = spell1Id;
    }

    public int getSpell2Id() {
        return spell2Id;
    }

    public void setSpell2Id(int spell2Id) {
        this.spell2Id = spell2Id;
    }

    public String getHighestAchievedSeasonTier() {
        return highestAchievedSeasonTier;
    }

    public void setHighestAchievedSeasonTier(String highestAchievedSeasonTier) {
        this.highestAchievedSeasonTier = highestAchievedSeasonTier;
    }

    public ParticipantTimelineInfo getTimeline() {
        return timeline;
    }

    public void setTimeline(ParticipantTimelineInfo timeline) {
        this.timeline = timeline;
    }
}
