package Livraime.Unp.Livraime.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Livraime.Unp.Livraime.controller.dto.mapper.UsuarioMapper;
import Livraime.Unp.Livraime.controller.dto.response.BeneficiadosPorUsuarioResponseDTO;
import Livraime.Unp.Livraime.controller.dto.response.UsuarioResponseDTO;
import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.servico.BeneficiadoService;
import Livraime.Unp.Livraime.servico.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "Usuario", description = "Gerenciamento de usuarios assinantes")
public class UsuarioController {

    @Autowired
    private UserService service;

    @Autowired
    private BeneficiadoService beneficiadoService;

    /**
     * Lista todos os usuários cadastrados no sistema.
     * Retorna uma lista de DTOs com informações não sensíveis.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os usuarios")
    public ResponseEntity<?> listarusuarios() {
        try {
            List<Usuario> usuarios = service.getAll();
            List<UsuarioResponseDTO> usuariosDTO = UsuarioMapper.toResponseList(usuarios);
            return ResponseEntity.ok(usuariosDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    /**
     * Busca um usuário específico pelo seu ID.
     * Retorna um DTO com informações não sensíveis.
     * 
     * @param id ID do usuário a ser buscado
     *           -Anthony
     */
    @GetMapping("/{id}")
    @Operation(summary = "Buscar usuario por ID")
    public ResponseEntity<?> buscarPorId(@PathVariable int id) {
        try {
            var usuario = service.getById(id);
            var usuarioResponseDTO = UsuarioMapper.toResponse(usuario);
            return ResponseEntity.ok(usuarioResponseDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping("/GetBeneficiadosByUser/{usuarioId}")
    @Operation(summary = "Buscar beneficiados por ID do usuário")
    public ResponseEntity<?> getBeneficiadosByUser(@PathVariable Long usuarioId) {
        try {
            if (usuarioId == null || usuarioId <= 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                   .body("ID do usuário inválido");
            }
            BeneficiadosPorUsuarioResponseDTO response = beneficiadoService.buscarBeneficiadosCompletosPorUsuario(usuarioId);
            // Se não encontrou beneficiados, retorna 200 com lista vazia (mais semântico)
            if (response.beneficiados().isEmpty()) {
                return ResponseEntity.ok(response); // Retorna { "beneficiados": [] }
            }
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                               .body("Parâmetro inválido: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                               .body("Erro interno do servidor");
        }
    }
