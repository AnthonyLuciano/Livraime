package Livraime.Unp.Livraime.repositorio;

import Livraime.Unp.Livraime.modelo.Beneficiado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeneficiadoRepository extends JpaRepository<Beneficiado, Long> {
    List<Beneficiado> findByClienteAssinanteId(Long clienteAssinanteId);
}