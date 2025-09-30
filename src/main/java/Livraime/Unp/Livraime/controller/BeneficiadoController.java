package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.beneficiado;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/beneficiados")
@Tag(name = "Beneficiados", description = "Informações sobre as crianças beneficiadas")
public class BeneficiadoController {

    private List<beneficiado> beneficiados = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os beneficiados")
    public List<beneficiado> listarBeneficiados() {
        return beneficiados;
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo beneficiado")
    public beneficiado criarBeneficiado(@RequestBody beneficiado novoBeneficiado) {
        beneficiados.add(novoBeneficiado);
        return novoBeneficiado;
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar beneficiado por ID")
    public beneficiado buscarPorId(@PathVariable int id) {
        return beneficiados.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }
}
