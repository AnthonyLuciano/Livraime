package Livraime.Unp.Livraime.modelo;

public class parceiros {
    private int id;
    private String nome;
    private String tipo; // "sebo" ou "autor_independente"
    private String endereco;
    private String telefone;
    private String email;
    private String descricaoServicos;
    private boolean ativo;
    
    // Construtores, getters e setters
    public parceiros() {}
    
    public parceiros(int id, String nome, String tipo, String endereco, 
                    String telefone, String email, String descricaoServicos, boolean ativo) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.descricaoServicos = descricaoServicos;
        this.ativo = ativo;
    }
    
    // Getters e setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    
    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getDescricaoServicos() { return descricaoServicos; }
    public void setDescricaoServicos(String descricaoServicos) { this.descricaoServicos = descricaoServicos; }
    
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
}
