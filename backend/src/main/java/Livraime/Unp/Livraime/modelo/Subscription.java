package Livraime.Unp.Livraime.modelo;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "subscriptions")
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Data da inscrição
    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Relacionamento opcional com Usuario (caso exista)
    @ManyToOne(optional = true)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Subscription() {}

    public Long getId() { return id; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
}