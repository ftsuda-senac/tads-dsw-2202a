package br.senac.tads.dsw.exemplospost;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import org.springframework.format.annotation.DateTimeFormat;

public class DadosPessoais {
    
    private String nome;
    
    private String email;
    
    private String telefone;
    
    // ISO-8601
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dataNascimento;
    
    private String senha;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    public String getPrimeiroNome() {
        String[] nomeSeparado = this.nome.split("\\s+"); // 1 ou mais espaços em branco
        if (nomeSeparado.length > 1) {
            return nomeSeparado[0];
        }
        // Não deu para separar por espaço em branco - Usa o nome preenchido
        return this.nome;
    }
    
    public int getIdade() {
        if (this.getDataNascimento() != null) {
            return (int) ChronoUnit.YEARS.between(this.getDataNascimento(), LocalDate.now());
        }
        return 0;
    }
    
    public boolean isMaiorIdade() {
        return getIdade() >= 18;
//        if (getIdade() < 18) {
//            return false;
//        } else {
//            return true;
//        }
    }
}
