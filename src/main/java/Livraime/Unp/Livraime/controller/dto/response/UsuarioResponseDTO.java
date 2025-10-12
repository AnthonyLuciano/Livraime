package Livraime.Unp.Livraime.controller.dto.response;

import java.time.LocalDateTime;

public class UsuarioResponseDTO {
    private int id;
    private String nome;
    private String email;
    private String endereco;
    private String telefone;
    private String plano;
    private LocalDateTime dataCadastro;
    private boolean ativo;

    public UsuarioResponseDTO() {}

    public UsuarioResponseDTO(int id, String nome, String email, String endereco, String telefone, String plano, LocalDateTime dataCadastro, boolean ativo) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
        this.plano = plano;
        this.dataCadastro = dataCadastro;
        this.ativo = ativo;
    }

    public int getId() { return id; }
    public String getNome() { return nome; }
    public String getEmail() { return email; }
    public String getEndereco() { return endereco; }
    public String getTelefone() { return telefone; }
    public String getPlano() { return plano; }
    public LocalDateTime getDataCadastro() { return dataCadastro; }
    public boolean isAtivo() { return ativo; }

    public void setId(int id) { this.id = id; }
    public void setNome(String nome) { this.nome = nome; }
    public void setEmail(String email) { this.email = email; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
    public void setPlano(String plano) { this.plano = plano; }
    public void setDataCadastro(LocalDateTime dataCadastro) { this.dataCadastro = dataCadastro; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
}