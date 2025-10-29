package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de parceiros do sistema.
 * Gerencia sebos e autores independentes que colaboram com o projeto,
 * permitindo listar, cadastrar e buscar parceiros.
 * -Anthony
 */

import Livraime.Unp.Livraime.modelo.Parceiros;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/parceiros")
@Tag(name = "Parceiros", description = "Gerenciamento de parceiros (sebos e autores independentes)")
public class ParceiroController {

    private List<Parceiros> parceirosList = new ArrayList<>();

    /**
     * Lista todos os parceiros cadastrados no sistema.
     * Inclui sebos e autores independentes.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os parceiros")
    public List<Parceiros> listarParceiros() {
        return parceirosList;
    }

    /**
     * Cadastra um novo parceiro no sistema.
     * @param novoParceiro Dados do novo parceiro a ser cadastrado
     * -Anthony
     */
    @PostMapping
    @Operation(summary = "Cadastrar novo parceiro")
    public Parceiros criarParceiro(@RequestBody Parceiros novoParceiro) {
        parceirosList.add(novoParceiro);
        return novoParceiro;
    }

    /**
     * Busca um parceiro específico pelo seu ID.
     * @param id ID do parceiro a ser buscado
     * -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar parceiro por ID")
    public Parceiros buscarPorId(@PathVariable int id) {
        return parceirosList.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }
}
