package com.riftboss.analyzer.Repository;

import com.riftboss.analyzer.Entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepos extends JpaRepository<Team, Integer> {
}
