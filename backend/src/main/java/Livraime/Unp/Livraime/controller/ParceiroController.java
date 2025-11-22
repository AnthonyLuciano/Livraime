package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de parceiros do sistema.
 * Gerencia sebos e autores independentes que colaboram com o projeto,
 * permitindo listar, cadastrar e buscar parceiros.
 * -Anthony
 */

import Livraime.Unp.Livraime.modelo.Parceiro;
import Livraime.Unp.Livraime.controller.dto.request.SolicitacaoParceiriaRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@RestController
@RequestMapping("/api/parceiros")
@Tag(name = "Parceiros", description = "Gerenciamento de parceiros (sebos e autores independentes)")
public class ParceiroController {

    private List<Parceiro> parceirosList = new ArrayList<>();

    @PostMapping("/solicitar")
    public ResponseEntity<String> postMethodName(@RequestBody SolicitacaoParceiriaRequest request) {
        try{
            //logging only:
            System.out.println("Nova solicitação de parceiro recebida:");
            System.out.println("Nome: " + request.nome());
            System.out.println("Email: " + request.email());
            System.out.println("Tipo: " + request.tipo());

            return ResponseEntity.ok("Solicitação de parceria enviada com sucesso! Entraremos em contato em até 48 horas.");
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
        return parceirosList;
    }

    /**
     * Busca um parceiro específico pelo seu ID.
     * @param id ID do parceiro a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar parceiro por ID")
    public Parceiro buscarPorId(@PathVariable int id) {
        return parceirosList.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }

}
