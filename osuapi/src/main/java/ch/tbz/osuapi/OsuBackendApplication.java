package ch.tbz.osuapi;

import ch.tbz.osuapi.osu.OsuService;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication@AllArgsConstructor
public class OsuBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(OsuBackendApplication.class, args);
	}

}
