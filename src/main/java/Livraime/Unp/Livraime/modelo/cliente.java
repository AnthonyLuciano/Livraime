package Livraime.Unp.Livraime.modelo;

import java.time.LocalDate;

public class cliente {
    private int id;
    private String nome;
    private String email;
    private String senha;
    private String endereco;
    private String telefone;
    private String planoAssinatura;
    private LocalDate dataInicioAssinatura;
    private boolean ativo;
    private int beneficiadoId; // ID do beneficiado que este cliente está ajudando
    
    // Construtores, getters e setters
    public cliente() {}
    
    public cliente(int id, String nome, String email, String senha, String endereco, 
                  String telefone, String planoAssinatura, LocalDate dataInicioAssinatura, 
                  boolean ativo, int beneficiadoId) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.planoAssinatura = planoAssinatura;
        this.dataInicioAssinatura = dataInicioAssinatura;
        this.ativo = ativo;
        this.beneficiadoId = beneficiadoId;
    }
    
    // Getters e setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
    
    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
    
    public String getPlanoAssinatura() { return planoAssinatura; }
    public void setPlanoAssinatura(String planoAssinatura) { this.planoAssinatura = planoAssinatura; }
    
    public LocalDate getDataInicioAssinatura() { return dataInicioAssinatura; }
    public void setDataInicioAssinatura(LocalDate dataInicioAssinatura) { this.dataInicioAssinatura = dataInicioAssinatura; }
    
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
    
    public int getBeneficiadoId() { return beneficiadoId; }
    public void setBeneficiadoId(int beneficiadoId) { this.beneficiadoId = beneficiadoId; }
}
