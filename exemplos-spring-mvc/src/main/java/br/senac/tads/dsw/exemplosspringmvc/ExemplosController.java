package br.senac.tads.dsw.exemplosspringmvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExemplosController {
    
    @GetMapping
    public String exemplo01() {
        // Nome do arquivo criado no diretório "templates"
        return "exemplo01-template";
    }
    
}
