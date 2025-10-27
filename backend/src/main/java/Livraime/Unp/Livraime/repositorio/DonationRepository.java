package Livraime.Unp.Livraime.repositorio;

import Livraime.Unp.Livraime.modelo.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    @Query("SELECT COALESCE(SUM(d.quantidade), 0) FROM Donation d WHERE d.donatedAt BETWEEN :start AND :end")
    Long sumBooksDonatedBetween(@Param("start") LocalDateTime start, @Param("end") LocalDateTime end);
}