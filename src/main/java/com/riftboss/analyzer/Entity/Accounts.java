package com.riftboss.analyzer.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Accounts {

    @Id
    private Integer accountID;
    private String ingame;
    private boolean Flex;
    private boolean Solo;
    private String riotAccountID;

    public Accounts(){

    }

    public Integer getAccountID() {
        return accountID;
    }

    public void setAccountID(Integer accountID) {
        this.accountID = accountID;
    }

    public String getIngame() {
        return ingame;
    }

    public void setIngame(String ingame) {
        this.ingame = ingame;
    }

    public boolean getFlex() {
        return Flex;
    }

    public void setFlex(boolean flex) {
        Flex = flex;
    }

    public boolean getSolo() {
        return Solo;
    }

    public void setSolo(boolean solo) {
        Solo = solo;
    }

    public String getRiotAccountID() {
        return riotAccountID;
    }

    public void setRiotAccountID(String riotAccountID) {
        this.riotAccountID = riotAccountID;
    }
}
