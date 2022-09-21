package br.senac.tads.dsw.exemplosspringmvc;

import java.time.LocalDateTime;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/exemplos")
public class ExemplosController {

    @GetMapping
    public String exemplo01() {
        // Nome do arquivo criado no diretório "templates"
        return "exemplo01-template";
    }

    @GetMapping("/ex02")
    public String exemplo02() {
        return "exemplo02";
    }

    @GetMapping("/ex03")
    public String exemplo03(Model model) {
        String titulo = "Exemplo 03 - Título gerado no Controller";
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        int numero = 123;

        model.addAttribute("tituloAttr", titulo);
        model.addAttribute("dataHoraAttr", dataHoraAtual);
        model.addAttribute("numeroAttr", numero);

        return "exemplo03";
    }

    @GetMapping("/ex03b")
    public ModelAndView exemplo03b() {
        String titulo = "Exemplo 03b - Título gerado no Controller";
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        int numero = 897;

        ModelAndView mv = new ModelAndView("exemplo03");
        mv.addObject("tituloAttr", titulo);
        mv.addObject("dataHoraAttr", dataHoraAtual);
        mv.addObject("numeroAttr", numero);
        return mv;
    }

    @GetMapping("/ex03c")
    public ModelAndView exemplo03c() {
        String titulo = "Exemplo 03c - Título gerado no Controller + Classe DAdos";
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        int numero = 897;

        Dados dados = new Dados(titulo, dataHoraAtual, numero);
        ModelAndView mv = new ModelAndView("exemplo03c");
        mv.addObject("dados", dados);
        return mv;
    }

    @GetMapping("/ex03/json1")
    @ResponseBody
    public String exemplo03Json1() {
        String titulo = "Exemplo 03 JSON - Título gerado no Controller";
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        int numero = 897;
        return "{"
                + "\"titulo\" : \"" + titulo + "\","
                + "\"dataHora\" : \"" + dataHoraAtual + "\","
                + "\"numero\" : " + numero + " }";
    }

    @GetMapping("/ex03/json2")
    @ResponseBody
    public Dados exemplo03Json2() {
        String titulo = "Exemplo 03 JSON - Título gerado no Controller + Classe Dados";
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        int numero = 444;

        Dados retorno = new Dados(titulo, dataHoraAtual, numero);
        return retorno;
    }

}
