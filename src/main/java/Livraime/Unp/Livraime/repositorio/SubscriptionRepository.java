package Livraime.Unp.Livraime.repositorio;

import Livraime.Unp.Livraime.modelo.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    long countByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
}