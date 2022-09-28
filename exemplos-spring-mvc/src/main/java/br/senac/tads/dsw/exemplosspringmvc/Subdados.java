
package br.senac.tads.dsw.exemplosspringmvc;


public class Subdados {
    
    private String titulo;
    
    private int valor;

    public String getTitulo() {
        return "Pegadinha do Malandro";
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }
    
    public boolean verificaParOriginal() {
        int resto = valor % 2;
        if (resto == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    public boolean verificaPar() {
        int resto = valor % 2;
        return (resto == 0);
    }
    
}
