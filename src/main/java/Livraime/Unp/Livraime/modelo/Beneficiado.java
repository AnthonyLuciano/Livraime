package Livraime.Unp.Livraime.modelo;

import java.time.LocalDate;

public class Beneficiado {
    private int id;
    private String nome;
    private int idade;
    private LocalDate dataNascimento;
    private String endereco;
    private String cidade;
    private String estado;
    private String descricaoNecessidades;
    private boolean ativo;
    private int clienteAssinanteId; // ID do cliente que está ajudando este beneficiado
    
    // Construtores, getters e setters
    public Beneficiado() {}
    
    public Beneficiado(int id, String nome, int idade, LocalDate dataNascimento, 
                      String endereco, String cidade, String estado, 
                      String descricaoNecessidades, boolean ativo, int clienteAssinanteId) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.descricaoNecessidades = descricaoNecessidades;
        this.ativo = ativo;
        this.clienteAssinanteId = clienteAssinanteId;
    }
    
    // Getters e setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public int getIdade() { return idade; }
    public void setIdade(int idade) { this.idade = idade; }
    
    public LocalDate getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(LocalDate dataNascimento) { this.dataNascimento = dataNascimento; }
    
    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    
    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }
    
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    
    public String getDescricaoNecessidades() { return descricaoNecessidades; }
    public void setDescricaoNecessidades(String descricaoNecessidades) { this.descricaoNecessidades = descricaoNecessidades; }
    
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
    
    public int getClienteAssinanteId() { return clienteAssinanteId; }
    public void setClienteAssinanteId(int clienteAssinanteId) { this.clienteAssinanteId = clienteAssinanteId; }
}
