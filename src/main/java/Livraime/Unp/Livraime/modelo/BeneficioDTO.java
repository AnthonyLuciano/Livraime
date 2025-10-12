package Livraime.Unp.Livraime.modelo;

public class BeneficioDTO {
    private String nome;
    private String descricao;

    public BeneficioDTO() {}

    public BeneficioDTO(String nome, String descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}