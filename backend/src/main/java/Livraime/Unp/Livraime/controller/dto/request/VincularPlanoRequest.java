package Livraime.Unp.Livraime.controller.dto.request;

public class VincularPlanoRequest {
    private String cpf;
    private String plano;

    // Construtor padrão
    public VincularPlanoRequest() {}

    // Construtor com parâmetros
    public VincularPlanoRequest(String cpf, String plano) {
        this.cpf = cpf;
        this.plano = plano;
    }

    // Getters e Setters
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getPlano() {
        return plano;
    }

    public void setPlano(String plano) {
        this.plano = plano;
    }
}