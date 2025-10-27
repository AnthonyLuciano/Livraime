package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.controller.dto.response.PlanoDTO;
import Livraime.Unp.Livraime.modelo.Plano;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/planos")
@Tag(name = "Planos", description = "Planos de assinatura disponíveis")
public class PlanoController {

    @GetMapping
    @Operation(summary = "Listar todos os planos")
    public List<PlanoDTO> listarPlanos() {
        return Arrays.stream(Plano.values())
                .map(Plano::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{input}")
    @Operation(summary = "Buscar plano pelo código ou apelido")
    public PlanoDTO buscarPlano(@PathVariable String input) {
        return Plano.fromInput(input).toDto();
    }
}
