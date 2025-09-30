package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.planos;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/planos")
@Tag(name = "Planos", description = "Planos de assinatura disponíveis")
public class PlanoController {

    @GetMapping
    @Operation(summary = "Listar todos os planos")
    public List<planos> listarPlanos() {
        return Arrays.asList(planos.values());
    }

    @GetMapping("/{input}")
    @Operation(summary = "Buscar plano pelo código ou apelido")
    public planos buscarPlano(@PathVariable String input) {
        return planos.fromInput(input);
    }
}
