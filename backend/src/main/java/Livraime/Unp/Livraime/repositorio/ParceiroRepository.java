package Livraime.Unp.Livraime.repositorio;

import Livraime.Unp.Livraime.modelo.Parceiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParceiroRepository extends JpaRepository<Parceiro, Long> {

}
