package com.riftboss.analyzer.Repository;

import com.riftboss.analyzer.Entity.MapsInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MapsRepos extends JpaRepository<MapsInfo, Integer> {

    MapsInfo findMapsInfoByMapId(int mapId);
}
