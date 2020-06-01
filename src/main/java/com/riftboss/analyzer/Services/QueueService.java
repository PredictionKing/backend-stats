package com.riftboss.analyzer.Services;

import com.riftboss.analyzer.Entity.QueuesInfo;
import com.riftboss.analyzer.Repository.QueueRepos;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@DynamicUpdate
public class QueueService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final QueueRepos queueRepos;

    public QueueService(QueueRepos queueRepos) {
        this.queueRepos = queueRepos;
    }


    public List<QueuesInfo> getQueues(){
        List<QueuesInfo> infos = new ArrayList<QueuesInfo>();
        restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory("http://static.developer.riotgames.com/docs/lol/"));
        infos.addAll(Arrays.asList(this.restTemplate.getForObject("queues.json", QueuesInfo[].class)));
        return infos;
    }
}
