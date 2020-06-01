package com.riftboss.analyzer.Repository;

import com.riftboss.analyzer.Entity.QueuesInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QueueRepos extends JpaRepository<QueuesInfo, Integer> {

    QueuesInfo findQueuesInfoByQueueId(int queueId);

}
