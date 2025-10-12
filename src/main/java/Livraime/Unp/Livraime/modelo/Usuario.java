package Livraime.Unp.Livraime.modelo;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;
    private String endereco;
    private String telefone;
    private Planos plano;
    private LocalDateTime dataCadastro = LocalDateTime.now();
    private boolean ativo = true;
    private String codigoVerificacao;
    private boolean emailVerificado = false;

    // Construtor padrão
    public Usuario() {}

    // Construtor completo
    public Usuario(int id, String nome, String email, String senha, String endereco, String telefone, Planos plano, LocalDateTime dataCadastro, boolean ativo, String codigoVerificacao, boolean emailVerificado) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.plano = plano;
        this.dataCadastro = dataCadastro;
        this.ativo = ativo;
        this.codigoVerificacao = codigoVerificacao;
        this.emailVerificado = emailVerificado;
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

    public Planos getPlano() { return plano; }
    public void setPlano(Planos plano) { this.plano = plano; }

    public LocalDateTime getDataCadastro() { return dataCadastro; }
    public void setDataCadastro(LocalDateTime dataCadastro) { this.dataCadastro = dataCadastro; }

    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }

    public String getCodigoVerificacao() { return codigoVerificacao; }
    public void setCodigoVerificacao(String codigo) { this.codigoVerificacao = codigo; }

    public boolean isEmailVerificado() { return emailVerificado; }
    public void setEmailVerificado(boolean emailVerificado) { this.emailVerificado = emailVerificado; }
}