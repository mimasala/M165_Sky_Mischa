package ch.tbz.osuapi.osu;

import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface OsuRepository extends Neo4jRepository<Osu, Long> {
    List<Osu> findByTitle(String title);
}
