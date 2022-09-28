package br.senac.tads.dsw.exemplosspringmvc;

import java.time.LocalDateTime;
import java.util.List;

public class Dados {
    
    private String titulo;
    
    private LocalDateTime dataHora;
    
    private int numero;
    
    private List<Subdados> outrasInfos;
    
    public Dados() {
        
    }

    public Dados(String titulo, LocalDateTime dataHora, int numero) {
        this.titulo = titulo;
        this.dataHora = dataHora;
        this.numero = numero;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public List<Subdados> getOutrasInfos() {
        return outrasInfos;
    }

    public void setOutrasInfos(List<Subdados> outrasInfos) {
        this.outrasInfos = outrasInfos;
    }
    
}
