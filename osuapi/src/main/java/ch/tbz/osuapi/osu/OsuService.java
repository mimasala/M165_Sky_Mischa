package ch.tbz.osuapi.osu;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OsuService {
    private final OsuRepository repository;

    @Autowired
    public OsuService(OsuRepository repository) {
        this.repository = repository;
    }

    public List<Osu> getAllOsu() {
        return repository.findAll();
    }

    public List<Osu> findByName(String title) {
        return repository.findByTitle(title);
    }

    public Osu saveOsu(Osu osu) {
        return repository.save(osu);
    }

    public List<Osu> saveAllOsu(List<Osu> osu) {
        return repository.saveAll(osu);
    }
}
