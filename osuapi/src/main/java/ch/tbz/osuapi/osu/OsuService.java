package ch.tbz.osuapi.osu;

import com.google.gson.Gson;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OsuService {
    private final OsuRepository repository;
    @Value("${osu.data.source.base.url}")
    private String osuDataSourceBaseUrl;


    @Autowired
    public OsuService(OsuRepository repository) {
        this.repository = repository;
    }

    public Osu osuFromJson(String json) {
        return new Gson().fromJson(json, Osu.class);
    }

    public List<Osu> getAllOsu() {
        return repository.findAll();
    }

    public List<Osu> findByName(String title) {
        return repository.findByTitle(title);
    }

    public Osu saveOsu(@Valid Osu osu) {
        return repository.save(osu);
    }
}
