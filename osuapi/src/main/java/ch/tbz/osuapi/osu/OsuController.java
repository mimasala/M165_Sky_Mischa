package ch.tbz.osuapi.osu;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class OsuController {
    @Autowired
    private OsuService osuService;

    @GetMapping("")
    private ResponseEntity<List<Osu>> findAll (){
        return ResponseEntity.ok().body(osuService.getAllOsu());
    }
    @GetMapping("")
    private ResponseEntity<List<Osu>> findByName(@RequestParam("title") String title){
        return ResponseEntity.ok().body(osuService.findByName(title));
    }
    @PostMapping()
    private ResponseEntity<Osu> createOsu(@Valid@RequestBody Osu osu){
        return ResponseEntity.ok().body(osuService.saveOsu(osu));
    }
}
