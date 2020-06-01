package com.riftboss.analyzer.Entity;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
@DynamicUpdate
public class QueuesInfo {

   @Id
   private int queueId;
   private String map;
   private String description;
   private String notes;

    public QueuesInfo() {
    }

    public QueuesInfo(int queueId, String map, String description, String notes) {
        this.queueId=queueId;
        this.description=description;
        this.map=map;
        this.notes=notes;
    }


    public int getQueueId() {
        return queueId;
    }

    public String getMap() {
        return map;
    }

    public String getDescription() {
        return description;
    }

    public String getNotes() {
        return notes;
    }

    public void setQueueId(int queueId) {
        this.queueId = queueId;
    }

    public void setMap(String map) {
        this.map = map;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

