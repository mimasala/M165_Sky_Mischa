package ch.tbz.osuapi;

import ch.tbz.osuapi.osu.OsuService;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Map;

@SpringBootApplication@AllArgsConstructor
public class OsuBackendApplication {

	private final OsuService dataService;

	public static void main(String[] args) {
		SpringApplication.run(OsuBackendApplication.class, args);
	}

}
