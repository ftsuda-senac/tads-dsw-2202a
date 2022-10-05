package br.senac.tads.dsw.exemplospost;

import java.time.LocalDate;
import javax.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class DadosPessoaisController {
    
    @GetMapping("/dados-pessoais")
    public ModelAndView mostrarFormulario() {
        ModelAndView mv = new ModelAndView("form");
        return mv;
    }
    
    @PostMapping("/destino-dados1")
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
        mv.addObject("origemDados", "destino-dados1");
        return mv;
    }
    
    @PostMapping("/destino-dados2")
    public ModelAndView receberDadosDto(@ModelAttribute DadosPessoais dados) {
        ModelAndView mv = new ModelAndView("resultado");
        mv.addObject("dados", dados);
        mv.addObject("origemDados", "destino-dados2 (DTO)");
        return mv;
    }
    
    // ===== EXEMPLOS POST-REDIRECT-GET
    @GetMapping("/dados-pessoais-prg")
    public ModelAndView mostrarFormularioPrg() {
        ModelAndView mv = new ModelAndView("form-prg");
        return mv;
    }
    
    @PostMapping("/destino-dados-prg")
    public ModelAndView receberDadosPrg(
            @ModelAttribute DadosPessoais dados,
            RedirectAttributes redirectAttributes) {
        ModelAndView mv = new ModelAndView("redirect:/resultado-prg");
        redirectAttributes.addFlashAttribute("dados", dados);
        redirectAttributes.addFlashAttribute("origemDados", "destino-dados-prg");
        return mv;
    }
    
    @GetMapping("/resultado-prg")
    public ModelAndView resultadosPrg() {
        ModelAndView mv = new ModelAndView("resultado-prg");
        return mv;
    }
    
    // ===== EXEMPLOS VALIDACAO
    
    @GetMapping("/dados-pessoais-validacao")
    public ModelAndView mostrarFormularioValidacao() {
        ModelAndView mv = new ModelAndView("form-validacao");
        mv.addObject("dados", new DadosPessoais());
        return mv;
    }
    
    @PostMapping("/destino-dados-validacao")
    public ModelAndView receberDadosValidacao(
            @ModelAttribute("dados") @Valid DadosPessoais dados,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            // Reapresenta formulario com mensagens de erro
            return new ModelAndView("form-validacao");
        }
        ModelAndView mv = new ModelAndView("redirect:/resultado-validacao");
        redirectAttributes.addFlashAttribute("dados", dados);
        redirectAttributes.addFlashAttribute("origemDados", "destino-dados-validacao");
        return mv;
    }
    
    @GetMapping("/resultado-validacao")
    public ModelAndView resultadosValidacao() {
        ModelAndView mv = new ModelAndView("resultado-validacao");
        return mv;
    }
}
