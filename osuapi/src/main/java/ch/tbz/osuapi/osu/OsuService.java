package ch.tbz.osuapi.osu;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OsuService {
    public Osu osuFromJson(String json) {
        return new Gson().fromJson(json, Osu.class);
    }
}
