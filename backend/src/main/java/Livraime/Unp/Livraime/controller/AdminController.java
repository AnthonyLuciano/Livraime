package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pela administração do sistema.
 * Gerencia administradores e fornece métricas importantes do sistema
 * como número de assinaturas, livros doados e parceiros nos últimos 6 meses.
 * -Anthony
 */

import Livraime.Unp.Livraime.controller.dto.response.MetricDto;
import Livraime.Unp.Livraime.modelo.Admin;
import Livraime.Unp.Livraime.repositorio.SubscriptionRepository;
import Livraime.Unp.Livraime.repositorio.DonationRepository;
import Livraime.Unp.Livraime.repositorio.PartnerRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/admins")
@Tag(name = "Admins", description = "Gerenciamento de administradores")
@Repository
public class AdminController {

    private final SubscriptionRepository subscriptionRepository;
    private final DonationRepository donationRepository;
    private final PartnerRepository partnerRepository;

    public AdminController(SubscriptionRepository subscriptionRepository,
                           DonationRepository donationRepository,
                           PartnerRepository partnerRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.donationRepository = donationRepository;
        this.partnerRepository = partnerRepository;
    }

    private List<Admin> admins = new ArrayList<>();

    /**
     * Lista todos os administradores cadastrados no sistema.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os administradores")
    public List<Admin> listarAdmins() {
        return admins;
    }

    /**
     * Cadastra um novo administrador no sistema.
     * @param novoAdmin Dados do novo administrador
     * -Anthony
     */
    @PostMapping
    @Operation(summary = "Criar novo administrador")
    public Admin criarAdmin(@RequestBody Admin novoAdmin) {
        admins.add(novoAdmin);
        return novoAdmin;
    }

    /**
     * Busca um administrador específico pelo seu ID.
     * @param id ID do administrador a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar administrador por ID")
    public Admin buscarPorId(@PathVariable int id) {
        return admins.stream().filter(a -> a.getId() == id).findFirst().orElse(null);
    }

    /**
     * Retorna métricas dos últimos 6 meses incluindo:
     * - Número de assinaturas
     * - Quantidade de livros doados
     * - Número de parceiros
     * -Anthony
     */
    @GetMapping("/metrics")
    @Operation(summary = "Métricas dos últimos 6 meses")
    public List<MetricDto> buscarMetricasUltimos6Meses() {
        List<MetricDto> resultado = new ArrayList<>();
        LocalDate hoje = LocalDate.now();

        for (int i = 5; i >= 0; i--) {
            LocalDate dataDoMes = hoje.minusMonths(i);
            LocalDate inicioDoMes = dataDoMes.withDayOfMonth(1);
            LocalDate fimDoMes = dataDoMes.withDayOfMonth(dataDoMes.lengthOfMonth());

            // Nome do mês em Português (ex: "mai", "jun")
            String mes = dataDoMes.getMonth().getDisplayName(TextStyle.SHORT, Locale.forLanguageTag("pt-BR"));

            LocalDateTime inicio = inicioDoMes.atStartOfDay();
            LocalDateTime fim = fimDoMes.atTime(LocalTime.MAX);

            long subscriptions = countSubscriptionsBetween(inicio, fim);
            long donatedBooks = countDonatedBooksBetween(inicio, fim);
            long partners = countPartnersAtMonthEnd(fim);

            resultado.add(new MetricDto(mes, subscriptions, donatedBooks, partners));
        }

        return resultado;
    }

    // Métodos que chamam repositórios — adapte aos nomes/colunas das suas entidades
    private long countSubscriptionsBetween(LocalDateTime startInclusive, LocalDateTime endInclusive) {
        return subscriptionRepository.countByCreatedAtBetween(startInclusive, endInclusive);
    }

    private long countDonatedBooksBetween(LocalDateTime startInclusive, LocalDateTime endInclusive) {
        // Caso você precise somar quantidade de livros doados, use o método do DonationRepository que retorna SUM
        Long sum = donationRepository.sumBooksDonatedBetween(startInclusive, endInclusive);
        return sum == null ? 0L : sum;
    }

    private long countPartnersAtMonthEnd(LocalDateTime monthEndDateTime) {
        // Conta parceiros ativos até a data (ex.: createdAt <= monthEndDateTime AND active = true)
        return partnerRepository.countActiveUntil(monthEndDateTime);
    }
}
