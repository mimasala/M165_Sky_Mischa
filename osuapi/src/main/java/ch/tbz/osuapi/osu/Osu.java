package ch.tbz.osuapi.osu;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.time.LocalDate;

@Node@Getter@Setter
public class Osu {
    @Id@GeneratedValue
    @Setter(AccessLevel.NONE)
    public Long id;
    public Double difficulty_ar;
    public Double difficulty_hp;
    public String source;
    public Long bpm;
    public Long play_length;
    public Double difficulty_od;
    public Long beatmapset;
    public Long favorites;
    public Long gamemode;
    public LocalDate date;
    public String mapper;
    public String genre;
    public Double difficulty;
    public Double difficulty_cs;
    public String difficulty_name;
    public Long pass_count;
    public Long beatmap_id;
    public String artist;
    public Long beatmapset_id;
    public String language;
    public Long total_length;
    public Long beatmap_status;
    public String title;
    public Long map_count;
    public Long play_count;
    public Object ignored;
}
