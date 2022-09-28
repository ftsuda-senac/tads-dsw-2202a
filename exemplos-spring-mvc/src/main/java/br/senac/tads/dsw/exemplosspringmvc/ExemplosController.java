package br.senac.tads.dsw.exemplosspringmvc;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/ex04")
    public ModelAndView exemplo04() {
        Dados retorno = new Dados("Exemplo 04", LocalDateTime.now(), 123);
        Subdados item1 = new Subdados();
        item1.setTitulo("Titulo 1");
        item1.setValor(222);
        Subdados item2 = new Subdados();
        item2.setTitulo("Titulo 22");
        item2.setValor(555);

        List<Subdados> listaOutros = new ArrayList<>();
        listaOutros.add(item1);
        listaOutros.add(item2);

        retorno.setOutrasInfos(listaOutros);
        ModelAndView mv = new ModelAndView("exemplo04");
        mv.addObject("dados", retorno);
        return mv;
    }

    // Parametros titulo e numero informados via query string
    // http://localhost:8080/exemplos/ex05?titulo=Titulo%20informado%20na%20query%20string&numero=456&parametro=xpto
    @GetMapping("/ex05")
    public ModelAndView ex05(String titulo, int numero) {
        Dados d = new Dados(titulo, LocalDateTime.now(), numero);

        ModelAndView mv = new ModelAndView("exemplo03c");
        mv.addObject("dados", d);
        return mv;
    }

    @GetMapping("/ex05b")
    public ModelAndView ex05b(
            @RequestParam(required = false, value = "titulo") String txtTitulo,
            @RequestParam(defaultValue = "0") int numero) {
        if (txtTitulo == null) {
            txtTitulo = "Título não informado";
        }
        Dados d = new Dados(txtTitulo, LocalDateTime.now(), numero);

        ModelAndView mv = new ModelAndView("exemplo03c");
        mv.addObject("dados", d);
        return mv;
    }

    @GetMapping("/ex06/{identificador}")
    public ModelAndView ex06(@PathVariable String identificador) {

        String titulo = "Não encontrado";
        int numero = 0;
        if ("fulano".equals(identificador)) {
            titulo = "Página do Fulano da Silva";
            numero = 58;
        } else if ("ciclano".equals(identificador)) {
            titulo = "Página do Ciclano de Souza";
            numero = 47;
        } else if ("beltrana".equals(identificador)) {
            titulo = "Página da Beltrana dos Santos";
            numero = 11;
        }
        Dados d = new Dados(titulo, LocalDateTime.now(), numero);
        ModelAndView mv = new ModelAndView("exemplo03c");
        mv.addObject("dados", d);
        return mv;
    }

    @GetMapping("/ex06b/{identificador}")
    public ModelAndView ex06b(@PathVariable String identificador) {

        String titulo = "Não encontrado";
        int numero = 0;
        String urlGithubFake = "https://github.com/" + identificador;

        if ("fulano".equals(identificador)) {
            titulo = "Página do Fulano da Silva";
            numero = 58;
        } else if ("ciclano".equals(identificador)) {
            titulo = "Página do Ciclano de Souza";
            numero = 47;
        } else if ("beltrana".equals(identificador)) {
            titulo = "Página da Beltrana dos Santos";
            numero = 11;
        }
        Dados d = new Dados(titulo, LocalDateTime.now(), numero);
        ModelAndView mv = new ModelAndView("exemplo06b");
        mv.addObject("dados", d);
        mv.addObject("urlGithub", urlGithubFake);
        return mv;
    }

    // Exemplo exibição dinâmica de interfaces móveis/desktop
    @GetMapping("/ex-exibicao-dinamica")
    public ModelAndView exExibicaoDinamica(
            @RequestHeader("user-agent") String userAgent) {

        String mensagem = "Acesso via dispositivo movel";
        String backgrondColor = "#2ecc71"; //Verde

        if (!userAgent.toLowerCase().contains("mobile")) {
            mensagem = "Acesso via desktop";
            backgrondColor = "#9b59b6"; // Roxo
        }

        ModelAndView mv = new ModelAndView("exibicao-dinamica");
        mv.addObject("mensagem", mensagem);
        mv.addObject("bgColor", backgrondColor);
        mv.addObject("userAgent", userAgent);
        return mv;
    }

    @GetMapping("/ex-exibicao-dinamica-v2")
    public ModelAndView exExibicaoDinamicaV2(
            @RequestHeader("user-agent") String userAgent) {

        String viewTemplate = "exibicao-dinamica-mobile";
        if (!userAgent.toLowerCase().contains("mobile")) {
            viewTemplate = "exibicao-dinamica-desktop";
        }

        ModelAndView mv = new ModelAndView(viewTemplate);
        mv.addObject("userAgent", userAgent);
        return mv;
    }
    
    @GetMapping("/ex-sites-separados/desktop")
    public ModelAndView exSiteSeparadoDesktop(
            @RequestHeader("user-agent") String userAgent) {
        String viewTemplate = "sites-separados-desktop";
        if (userAgent.toLowerCase().contains("mobile")) {
            viewTemplate = "redirect:/exemplos/ex-sites-separados/mobile";
        }
        ModelAndView mv = new ModelAndView(viewTemplate);
        mv.addObject("userAgent", userAgent);
        return mv;
    }
      
    @GetMapping("/ex-sites-separados/mobile")
    public ModelAndView exSiteSeparadoMobile(
            @RequestHeader("user-agent") String userAgent) {
        String viewTemplate = "sites-separados-mobile";
        if (!userAgent.toLowerCase().contains("mobile")) {
            viewTemplate = "redirect:/exemplos/ex-sites-separados/desktop";
        }
        ModelAndView mv = new ModelAndView(viewTemplate);
        mv.addObject("userAgent", userAgent);
        return mv;
    }
    
    @GetMapping("/ex-headers")
    public ModelAndView exHeaders(
            @RequestHeader Map<String, String> mapCabecalhos,
            @RequestParam(defaultValue = "0") int tabela) {
        String viewTemplate = "headers-lista";
        if (tabela == 1) {
            viewTemplate = "headers-tabela";
        }
        
        ModelAndView mv = new ModelAndView(viewTemplate);
        mv.addObject("cabecalhos", mapCabecalhos);
        return mv;
    }
    
    


}
