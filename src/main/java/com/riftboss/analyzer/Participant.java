package com.riftboss.analyzer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.riftboss.analyzer.Entity.Game.ParticipantStatsInfo;
import com.riftboss.analyzer.Entity.Game.ParticipantTimelineInfo;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Participant {

    private int participantId;
    private int championId;
    private List<ParticipantStats> stats;
    private int teamId;
    private int spell1Id;
    private int spell2Id;
    private String highestAchievedSeasonTier;
    private List<ParticipantTimeline> timeline;

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

    public List<ParticipantStats> getStats() {
        return stats;
    }

    public void setStats(List<ParticipantStats> stats) {
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

    public List<ParticipantTimeline> getTimeline() {
        return timeline;
    }

    public void setTimeline(List<ParticipantTimeline> timeline) {
        this.timeline = timeline;
    }
}
