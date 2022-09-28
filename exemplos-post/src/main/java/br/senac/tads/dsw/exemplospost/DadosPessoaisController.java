package br.senac.tads.dsw.exemplospost;

import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DadosPessoaisController {
    
    
    @GetMapping("/dados-pessoais")
    public ModelAndView mostrarFormulario() {
        ModelAndView mv = new ModelAndView("form");
        return mv;
    }
    
    
    @PostMapping("/destino-dados")
    public ModelAndView receberDados(
            @RequestParam String nome,
            @RequestParam String email,
            @RequestParam String telefone,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataNascimento,
            @RequestParam String senha        
    ) {
        DadosPessoais dados = new DadosPessoais();
        dados.setNome(nome);
        dados.setEmail(email);
        dados.setTelefone(telefone);
        dados.setDataNascimento(dataNascimento);
        dados.setSenha(senha);
        
        ModelAndView mv = new ModelAndView("resultado");
        mv.addObject("dados", dados);
        return mv;
    }
}
