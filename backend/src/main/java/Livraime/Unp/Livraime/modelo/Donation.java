package Livraime.Unp.Livraime.modelo;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Data da doação/registro
    @CreationTimestamp
    @Column(name = "donated_at", nullable = false, updatable = false)
    private LocalDateTime donatedAt;

    // Quantidade de livros doados neste registro
    @Column(name = "quantidade", nullable = false)
    private Integer quantidade = 1;

    // Relacionamento opcional com Usuario (doador)
    @ManyToOne(optional = true)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Donation() {}

    public Long getId() { return id; }
    public LocalDateTime getDonatedAt() { return donatedAt; }
    public Integer getQuantidade() { return quantidade; }
    public void setQuantidade(Integer quantidade) { this.quantidade = quantidade; }
    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
}