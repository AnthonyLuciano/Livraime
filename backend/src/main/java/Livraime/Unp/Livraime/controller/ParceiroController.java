package Livraime.Unp.Livraime.controller;

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

    @GetMapping
    @Operation(summary = "Listar todos os parceiros")
    public List<Parceiros> listarParceiros() {
        return parceirosList;
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo parceiro")
    public Parceiros criarParceiro(@RequestBody Parceiros novoParceiro) {
        parceirosList.add(novoParceiro);
        return novoParceiro;
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar parceiro por ID")
    public Parceiros buscarPorId(@PathVariable int id) {
        return parceirosList.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }
}
