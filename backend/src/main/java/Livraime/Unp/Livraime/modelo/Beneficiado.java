package Livraime.Unp.Livraime.modelo;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "beneficiados")
public class Beneficiado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nome;
    
    @Column(nullable = false)
    private int idade;
    
    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;
    
    @Column(nullable = false)
    private String estado;
    
    @Column(name = "descricao_necessidades", columnDefinition = "TEXT")
    private String descricaoNecessidades;
    
    @Column(nullable = false)
    private boolean ativo = true;
    
    @Column(name = "cliente_assinante_id", nullable = false)
    private Long clienteAssinanteId;

    // Construtores
    public Beneficiado() {}
    
    public Beneficiado(Long id, String nome, int idade, LocalDate dataNascimento, String estado, 
                      String descricaoNecessidades, boolean ativo, Long clienteAssinanteId) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.descricaoNecessidades = descricaoNecessidades;
        this.ativo = ativo;
        this.clienteAssinanteId = clienteAssinanteId;
    }
    
    // Getters e setters (mantenha os existentes, apenas ajustando tipos para Long)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public int getIdade() { return idade; }
    public void setIdade(int idade) { this.idade = idade; }
    
    public LocalDate getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(LocalDate dataNascimento) { this.dataNascimento = dataNascimento; }
    
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    
    public String getDescricaoNecessidades() { return descricaoNecessidades; }
    public void setDescricaoNecessidades(String descricaoNecessidades) { this.descricaoNecessidades = descricaoNecessidades; }
    
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
    
    public Long getClienteAssinanteId() { return clienteAssinanteId; }
    public void setClienteAssinanteId(Long clienteAssinanteId) { this.clienteAssinanteId = clienteAssinanteId; }
}
