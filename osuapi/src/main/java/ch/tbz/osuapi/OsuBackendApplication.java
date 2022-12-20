package ch.tbz.osuapi;

import ch.tbz.osuapi.data.DataService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Map;

@SpringBootApplication@AllArgsConstructor
public class OsuBackendApplication implements CommandLineRunner {

	private final DataService dataService;

	public static void main(String[] args) {
		SpringApplication.run(OsuBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		dataService.addSongs(Map.of("k", "1", "m", "0", "a", "1", "s", "0", "u", "0", "type", "string", "limit", "100"));
	}
}
