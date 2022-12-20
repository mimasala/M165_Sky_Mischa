package ch.tbz.osuapi.osu;

import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller@AllArgsConstructor
public class OsuController {
    private final OsuRepository osuRepository;
    @QueryMapping
    Iterable<Osu> osus() {
        return osuRepository.findAll();
    }
}
