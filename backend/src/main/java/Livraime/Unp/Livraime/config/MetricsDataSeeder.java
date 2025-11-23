package Livraime.Unp.Livraime.config;

import Livraime.Unp.Livraime.modelo.Parceiro;
import Livraime.Unp.Livraime.repositorio.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Random;

/**
 * Seeder de métricas/mock data para desenvolvimento.
 *
 * Insere dados de subscriptions, donations e parceiros distribuídos
 * ao longo dos últimos 6 meses quando as tabelas estiverem vazias.
 */
@Component
public class MetricsDataSeeder implements ApplicationRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private PartnerRepository partnerRepository;

    private final Random random = new Random();

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Proteção: apenas seed se tabelas estiverem vazias
    Long subs = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM subscriptions", Long.class);
    Long dons = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM donations", Long.class);
    Long parts = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM parceiros", Long.class);

    if ((subs != null && subs > 0) || (dons != null && dons > 0) || (parts != null && parts > 0)) return; // já tem dados

        LocalDate hoje = LocalDate.now();

        for (int i = 0; i < 6; i++) {
            LocalDate dataDoMes = hoje.minusMonths(i);
            LocalDate inicioDoMes = dataDoMes.withDayOfMonth(1);
            LocalDate fimDoMes = dataDoMes.withDayOfMonth(dataDoMes.lengthOfMonth());

            // criar entre 5 e 20 subscriptions distribuídas no mês
            int numSubs = 5 + random.nextInt(16);
            for (int s = 0; s < numSubs; s++) {
                LocalDateTime dt = randomDateTimeBetween(inicioDoMes, fimDoMes);
                jdbcTemplate.update("INSERT INTO subscriptions (created_at, usuario_id) VALUES (?, ?)",
                        Timestamp.valueOf(dt), null);
            }

            // criar doações: entre 3 e 10 registros com quantidade 1-10
            int numDon = 3 + random.nextInt(8);
            for (int d = 0; d < numDon; d++) {
                LocalDateTime dt = randomDateTimeBetween(inicioDoMes, fimDoMes);
                int quantidade = 1 + random.nextInt(10);
                jdbcTemplate.update("INSERT INTO donations (donated_at, quantidade, usuario_id) VALUES (?, ?, ?)",
                        Timestamp.valueOf(dt), quantidade, null);
            }

            // criar parceiros: entre 0 e 4 novos parceiros no mês
            int numParts = random.nextInt(5);
            for (int p = 0; p < numParts; p++) {
                String nome = "Parceiro Mock " + (i * 10 + p + 1);
                String tipo = random.nextBoolean() ? "sebo" : "autor";
                Parceiro parceiro = new Parceiro(null, nome, tipo, "Rua Exemplo, 123", "+55 11 99999-0000",
                        "mock@parceiro.local", "Serviços de exemplo", true);
                // set createdAt para uma data dentro do mês
                parceiro.setCreatedAt(randomDateTimeBetween(inicioDoMes, fimDoMes));
                partnerRepository.save(parceiro);
            }
        }
    }

    private LocalDateTime randomDateTimeBetween(LocalDate start, LocalDate end) {
        int days = (int) (end.toEpochDay() - start.toEpochDay());
        int add = days > 0 ? random.nextInt(days + 1) : 0;
        LocalDate chosen = start.plusDays(add);
        int hour = random.nextInt(24);
        int minute = random.nextInt(60);
        int second = random.nextInt(60);
        return LocalDateTime.of(chosen, LocalTime.of(hour, minute, second));
    }
}
