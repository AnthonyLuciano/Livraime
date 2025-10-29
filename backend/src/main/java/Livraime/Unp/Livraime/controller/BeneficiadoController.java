package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de beneficiados.
 * Gerencia informações sobre as crianças que recebem os benefícios
 * do projeto, permitindo listar, cadastrar e buscar beneficiados.
 * -Anthony
 */

import Livraime.Unp.Livraime.modelo.Beneficiado;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/beneficiados")
@Tag(name = "Beneficiados", description = "Informações sobre as crianças beneficiadas")
public class BeneficiadoController {

    private List<Beneficiado> beneficiados = new ArrayList<>();

    /**
     * Lista todos os beneficiados cadastrados no sistema.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os beneficiados")
    public List<Beneficiado> listarBeneficiados() {
        return beneficiados;
    }

    /**
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
     * Busca um beneficiado específico pelo seu ID.
     * @param id ID do beneficiado a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar beneficiado por ID")
    public Beneficiado buscarPorId(@PathVariable int id) {
        return beneficiados.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }
}
