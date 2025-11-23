package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de beneficiados.
 * Gerencia informações sobre as crianças que recebem os benefícios
 * do projeto, permitindo listar, cadastrar e buscar beneficiados.
 * -Anthony
 */

import Livraime.Unp.Livraime.modelo.Beneficiado;
import Livraime.Unp.Livraime.servico.BeneficiadoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/beneficiados")
@Tag(name = "Beneficiados", description = "Informações sobre as crianças beneficiadas")
public class BeneficiadoController {

    @Autowired
    private BeneficiadoService beneficiadoService;

    private List<Beneficiado> beneficiados = new ArrayList<>();

    public BeneficiadoController(BeneficiadoService beneficiadoService) {
        this.beneficiadoService = beneficiadoService;
    }

    /**
     * supostamente deveria(nao sei se implementado)
     * Lista todos os beneficiados cadastrados no sistema.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os beneficiados")
    public List<Beneficiado> listarBeneficiados() {
        return beneficiados;
    }

    /**
     * supostamente deveria(nao sei se implementado)
     * Cadastra um novo beneficiado no sistema.
     * Recebe os dados do beneficiado no corpo da requisição.
     * -Anthony
     */
    @PostMapping
    @Operation(summary = "Cadastrar novo beneficiado")
    public Beneficiado criarBeneficiado(@RequestBody Beneficiado novoBeneficiado) {
        beneficiados.add(novoBeneficiado);
        return novoBeneficiado;
    }

    /**
     * supostamente deveria(nao sei se implementado)
     * Busca um beneficiado específico pelo seu ID.
     * @param id ID do beneficiado a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar beneficiado por ID")
    public Beneficiado buscarPorId(@PathVariable int id) {
        return beneficiados.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }
    /*
    * busca todos os beneficiados no banco de dados :D
    * -Anthony
    */
    @GetMapping("/todos")
    public ResponseEntity<List<Beneficiado>> listarTodosBeneficiados() {
        List<Beneficiado> beneficiados = beneficiadoService.listarTodos();
        return ResponseEntity.ok(beneficiados);
    }
    
}
