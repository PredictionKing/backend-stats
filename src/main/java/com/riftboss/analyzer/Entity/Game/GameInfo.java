package com.riftboss.analyzer.Entity.Game;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.riftboss.analyzer.Participant;
import com.riftboss.analyzer.ParticipantIdentity;
import com.riftboss.analyzer.Teams;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class GameInfo {

   private long gameId;
   private int queueId;
   private String gameType;
   private long gameDuration;
   private String platformId;
   private long gameCreation;
   private int seasonId;
   private String gameVersion;
   private int mapId;
   private String gameMode;
   private List<ParticipantIdentityInfo> participantIdentities;
   private List<TeamsInfo> teams;
   private List<ParticipantInfo> participants;

   public long getGameId() {
      return gameId;
   }

   public void setGameId(long gameId) {
      this.gameId = gameId;
   }

   public int getQueueId() {
      return queueId;
   }

   public void setQueueId(int queueId) {
      this.queueId = queueId;
   }

   public String getGameType() {
      return gameType;
   }

   public void setGameType(String gameType) {
      this.gameType = gameType;
   }

   public long getGameDuration() {
      return gameDuration;
   }

   public void setGameDuration(long gameDuration) {
      this.gameDuration = gameDuration;
   }

   public String getPlatformId() {
      return platformId;
   }

   public void setPlatformId(String platformId) {
      this.platformId = platformId;
   }

   public long getGameCreation() {
      return gameCreation;
   }

   public void setGameCreation(long gameCreation) {
      this.gameCreation = gameCreation;
   }

   public int getSeasonId() {
      return seasonId;
   }

   public void setSeasonId(int seasonId) {
      this.seasonId = seasonId;
   }

   public String getGameVersion() {
      return gameVersion;
   }

   public void setGameVersion(String gameVersion) {
      this.gameVersion = gameVersion;
   }

   public int getMapId() {
      return mapId;
   }

   public void setMapId(int mapId) {
      this.mapId = mapId;
   }

   public String getGameMode() {
      return gameMode;
   }

   public void setGameMode(String gameMode) {
      this.gameMode = gameMode;
   }

   public Collection<ParticipantIdentityInfo> getParticipantIdentities() {
      return participantIdentities;
   }

   public void setParticipantIdentities(List<ParticipantIdentityInfo> participantIdentities) {
      this.participantIdentities = participantIdentities;
   }

   public List<TeamsInfo> getTeams() {
      return teams;
   }

   public void setTeams(List<TeamsInfo> teams) {
      this.teams = teams;
   }

   public List<ParticipantInfo> getParticipants() {
      return participants;
   }

   public void setParticipants(List<ParticipantInfo> participants) {
      this.participants = participants;
   }
}
