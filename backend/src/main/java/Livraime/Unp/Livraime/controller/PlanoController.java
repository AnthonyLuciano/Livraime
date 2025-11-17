package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento dos planos de assinatura.
 * Permite listar todos os planos disponíveis e buscar planos específicos
 * por código ou apelido.
 * -Anthony
 */

import Livraime.Unp.Livraime.controller.dto.request.VincularPlanoRequest;
import Livraime.Unp.Livraime.controller.dto.response.PlanoDTO;
import Livraime.Unp.Livraime.modelo.Plano;
import Livraime.Unp.Livraime.servico.PlanoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/planos")
@Tag(name = "Planos", description = "Planos de assinatura disponíveis")
public class PlanoController {

    @Autowired
    private PlanoService planoService;

    /**
     * Lista todos os planos de assinatura disponíveis.
     * Converte os planos para DTOs antes de retornar.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os planos")
    public List<PlanoDTO> listarPlanos() {
        return Arrays.stream(Plano.values())
                .map(Plano::toDto)
                .collect(Collectors.toList());
    }

    /**
     * Busca um plano específico pelo código ou apelido.
     * @param input Código ou apelido do plano
     * -Anthony
     */
    @GetMapping("/{input}")
    @Operation(summary = "Buscar plano pelo código ou apelido")
    public PlanoDTO buscarPlano(@PathVariable String input) {
        return Plano.fromInput(input).toDto();
    }

    /*
     * Vincula um plano a um usuario através do CPF
     * receve os dados sensiveis via request body por segurança.
     * -Anthony
     */
    @PostMapping("/vincular")
    @Operation(summary = "Vincular plano a um usuário pelo CPF")
    public ResponseEntity<String> vincularPlano(@RequestBody VincularPlanoRequest request){
        try{
            planoService.vincularPlanoAUsuario(request.cpf(), request.Plano());
            return ResponseEntity.ok("Plano vinculado com sucesso.");
        } catch (RuntimeException e){
           if (e.getMessage().contains("Usuario não encontrado")){
                return ResponseEntity.status(404).body(e.getMessage())
           }
           return ResponseEntity.badRequest().body(e.getMessage());
        }
         
    }
}
