package ch.tbz.osuapi.osu;

import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface OsuRepository extends Neo4jRepository<Osu, Long> {
}
