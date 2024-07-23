package elecciones.elecciones.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index"; // Devuelve el archivo index.html desde src/main/resources/templates
    }

    @GetMapping("/main")
    public String main() {
        return "main"; // Devuelve el archivo main.html desde src/main/resources/templates
    }
}
