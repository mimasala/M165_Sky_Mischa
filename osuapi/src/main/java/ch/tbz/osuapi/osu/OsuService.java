package ch.tbz.osuapi.osu;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

@Service
public class OsuService {
    private final OsuRepository repository;
    @Value("${osu.data.source.base.url}")
    private String osuDataSourceBaseUrl;


    @Autowired
    public OsuService(OsuRepository repository) {
        this.repository = repository;
    }

    public void addSongs(Map<String,?> params) {
        RestTemplate restTemplate = new RestTemplate();
        String response =restTemplate.getForObject(osuDataSourceBaseUrl, String.class, params);

        JsonObject jsonObject = new Gson().fromJson(response, JsonObject.class);
        response = jsonObject.get("beatmaps").toString();
        Type beatmapListType = new TypeToken<List<Osu>>(){}.getType();
        Gson gson = new Gson();
        List<Osu> beatmapList = gson.fromJson(response, beatmapListType);

        repository.saveAll(beatmapList);
    }
    public Osu osuFromJson(String json) {
        return new Gson().fromJson(json, Osu.class);
    }
}
