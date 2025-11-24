package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de parceiros do sistema.
 * Gerencia sebos e autores independentes que colaboram com o projeto,
 * permitindo listar, cadastrar e buscar parceiros.
 * -Anthony
 */

import Livraime.Unp.Livraime.modelo.Parceiro;
import Livraime.Unp.Livraime.controller.dto.request.SolicitacaoParceiriaRequest;
import Livraime.Unp.Livraime.repositorio.ParceiroRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RestController
@RequestMapping("/api/parceiros")
@Tag(name = "Parceiros", description = "Gerenciamento de parceiros (sebos e autores independentes)")
public class ParceiroController {

    private final ParceiroRepository parceiroRepository;

    public ParceiroController(ParceiroRepository parceiroRepository) {
        this.parceiroRepository = parceiroRepository;
    }

    @PostMapping("/solicitar")
    public ResponseEntity<?> postMethodName(@RequestBody SolicitacaoParceiriaRequest request) {
        try {
            // criar entidade Parceiro a partir da solicitação (salva como não ativa / pendente)
            Parceiro p = new Parceiro();
            p.setNome(request.nome());
            p.setEmail(request.email());
            p.setTelefone(request.telefone());
            p.setTipo(request.tipo());
            p.setEndereco(request.endereco());
            p.setDescricaoServicos(request.mensagem());
            p.setActive(false); // pendente

            Parceiro saved = parceiroRepository.save(p);

            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao processar solicitação: " + e.getMessage());
        }
    }
    
    /**
     * Lista todos os parceiros cadastrados no sistema.
     * Inclui sebos e autores independentes.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os parceiros")
    public List<Parceiro> listarParceiros() {
        return parceiroRepository.findAll();
    }

    /**
     * Busca um parceiro específico pelo seu ID.
     * @param id ID do parceiro a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar parceiro por ID")
    public Parceiro buscarPorId(@PathVariable int id) {
        return parceiroRepository.findById((long) id).orElse(null);
    }

    @PutMapping("/{id}/status")
    @Operation(summary = "Atualizar status da solicitação de parceiro")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody java.util.Map<String, String> body) {
        var status = body.get("status");
        var opt = parceiroRepository.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
        var p = opt.get();
        if ("aprovado".equalsIgnoreCase(status)) {
            p.setActive(true);
            p.setDeletedAt(null);
        } else if ("rejeitado".equalsIgnoreCase(status)) {
            p.setActive(false);
            p.setDeletedAt(java.time.LocalDateTime.now());
        }
        parceiroRepository.save(p);
        return ResponseEntity.ok(p);
    }

}
