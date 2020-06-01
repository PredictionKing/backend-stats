package com.riftboss.analyzer.Controller;

import com.riftboss.analyzer.Entity.*;
import com.riftboss.analyzer.Entity.Game.GameInfo;
import com.riftboss.analyzer.Repository.AccountsRepos;
import com.riftboss.analyzer.Repository.MapsRepos;
import com.riftboss.analyzer.Repository.QueueRepos;
import com.riftboss.analyzer.Repository.TeamRepos;
import com.riftboss.analyzer.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class MainController {
    @Autowired
    TeamRepos teamRepos;
    @Autowired
    AccountsRepos accountsRepos;
    @Autowired
    SummonerService summonerService;
    @Autowired
    MatchlistService matchlistService;
    @Autowired
    GameService gameService;
    @Autowired
    QueueService queueService;
    @Autowired
    QueueRepos queueRepos;
    @Autowired
    MapsService mapsService;


    @RequestMapping(method = RequestMethod.GET,
    path= "/team",
    produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Team> getTeam(){
        List<Team> teamList = teamRepos.findAll();
        return teamList;
    }

    @RequestMapping(method = RequestMethod.GET,
            path= "/accounts",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Accounts> getAccounts(@RequestParam String query){
        return accountsRepos.findAccountsByIngameContains(query);
    }

    @RequestMapping(method = RequestMethod.GET,
            path= "/summoner",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public SummonerInfo getSummoner(@RequestParam String name){
        return summonerService.getSummonerInfo(name);
    }

    @RequestMapping(method = RequestMethod.GET,
            path= "/matchlist",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public MatchlistInfo getMatchlist(@RequestParam String name){
        return matchlistService.getMatchlist(name);
    }

    @RequestMapping(method = RequestMethod.GET,
            path= "/queues",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<QueuesInfo> getQueues(){ return queueService.getQueues(); }

    @RequestMapping(method = RequestMethod.GET,
            path= "/maps",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MapsInfo> getMaps(){ return mapsService.getMaps(); }

    @RequestMapping(method = RequestMethod.GET,
            path= "/queue",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public QueuesInfo getQueue(@RequestParam int id){ return queueRepos.findQueuesInfoByQueueId(id); }

    @RequestMapping(method = RequestMethod.GET,
            path= "/game",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public GameInfo getGame(@RequestParam String matchId){ return gameService.getGame(matchId); }

    @RequestMapping(
            method = RequestMethod.PUT,
            path= "/accounts",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    @Transactional
    public Integer updateAccount(@RequestBody Accounts accounts){

        System.out.println(accounts.getAccountID());
        System.out.println(accounts.getFlex());
        System.out.println(accounts.getSolo());
        return accountsRepos.updateAccount(accounts.getAccountID(),accounts.getFlex(),accounts.getSolo());
    }
}
