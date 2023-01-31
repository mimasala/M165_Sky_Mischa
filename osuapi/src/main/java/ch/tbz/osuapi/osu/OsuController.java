package ch.tbz.osuapi.osu;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/osu")
public class OsuController {
    private final OsuService osuService;

    @Autowired
    public OsuController(OsuService osuService) {
        this.osuService = osuService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Osu>> findAll (){
        return ResponseEntity.ok().body(osuService.getAllOsu());
    }
    @GetMapping("/{title}")
    public ResponseEntity<List<Osu>> findByName(@PathVariable String title){
        return ResponseEntity.ok().body(osuService.findByName(title));
    }
    @PostMapping("/")
    public ResponseEntity<Osu> createOsu(@Valid@RequestBody Osu osu){
        return ResponseEntity.ok().body(osuService.saveOsu(osu));
    }
}
