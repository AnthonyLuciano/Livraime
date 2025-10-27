package Livraime.Unp.Livraime.repositorio;
import Livraime.Unp.Livraime.modelo.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByNome(String nome);
    Optional<Usuario> findById(int id);
    Optional<Usuario> findByEmail(String email);
}
