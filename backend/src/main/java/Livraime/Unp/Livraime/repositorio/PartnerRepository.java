package Livraime.Unp.Livraime.repositorio;

import Livraime.Unp.Livraime.modelo.Parceiros;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface PartnerRepository extends JpaRepository<Parceiros, Long> {

    @Query("SELECT COUNT(p) FROM Parceiros p " +
           "WHERE p.createdAt <= :asOf " +
           "AND (p.deletedAt IS NULL OR p.deletedAt > :asOf) " +
           "AND p.active = true")
    long countActiveUntil(@Param("asOf") LocalDateTime asOf);
}
   