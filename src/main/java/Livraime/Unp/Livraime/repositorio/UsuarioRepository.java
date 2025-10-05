package Livraime.Unp.Livraime.repositorio;
import Livraime.Unp.Livraime.modelo.usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<usuario, Integer> {
    Optional<usuario> findByNome(String nome);

    Optional<usuario> findByEmail(String email);
}
