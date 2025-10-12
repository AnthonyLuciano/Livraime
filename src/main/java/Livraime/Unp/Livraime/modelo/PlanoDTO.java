package Livraime.Unp.Livraime.modelo;

import java.util.List;

public class PlanoDTO {
    private String nivel;
    private int valor;
    private List<BeneficioDTO> beneficios;

    public PlanoDTO() {}

    public PlanoDTO(String nivel, int valor, List<BeneficioDTO> beneficios) {
        this.nivel = nivel;
        this.valor = valor;
        this.beneficios = beneficios;
    }

    public String getNivel() {
        return nivel;
    }

    public int getValor() {
        return valor;
    }

    public List<BeneficioDTO> getBeneficios() {
        return beneficios;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public void setBeneficios(List<BeneficioDTO> beneficios) {
        this.beneficios = beneficios;
    }
}