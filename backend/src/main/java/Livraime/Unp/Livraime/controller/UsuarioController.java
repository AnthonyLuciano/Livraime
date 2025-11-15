package Livraime.Unp.Livraime.controller;

/**
 * Controller responsável pelo gerenciamento de usuários assinantes.
 * Permite listar, cadastrar e buscar usuários do sistema.
 * Gerencia informações básicas dos assinantes e suas assinaturas.
 * -Anthony
 */

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Livraime.Unp.Livraime.controller.dto.mapper.UsuarioMapper;
import Livraime.Unp.Livraime.controller.dto.response.UsuarioResponseDTO;
import Livraime.Unp.Livraime.modelo.Endereco;
import Livraime.Unp.Livraime.modelo.Plano;
import Livraime.Unp.Livraime.modelo.Usuario;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "usuarios", description = "Gerenciamento de usuarios assinantes")
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();

    /**
     * Lista todos os usuários cadastrados no sistema.
     * Retorna uma lista de DTOs com informações não sensíveis.
     * -Anthony
     */
    @GetMapping
    @Operation(summary = "Listar todos os usuarios")
    public List<UsuarioResponseDTO> listarusuarios() {
        usuarios.add(new Usuario(1, "joao", "joao@gmail.com",
                "99999999999",
                "123123123", new Endereco(), "9999999999", Plano.BASICO, LocalDateTime.now(), true, "133231", true));
        return UsuarioMapper.toResponseList(usuarios);
    }

    /**
     * Cadastra um novo usuário no sistema.
     * 
     * @param novousuario Dados do novo usuário a ser cadastrado
     *                    -Anthony
     */
    @PostMapping
    @Operation(summary = "Cadastrar novo usuario")
    public ResponseEntity<Usuario> criarusuario(@RequestBody Usuario novousuario) {
        usuarios.add(novousuario);
        return ResponseEntity.ok(novousuario);
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
    public ResponseEntity<UsuarioResponseDTO> buscarPorId(@PathVariable int id) {
        return usuarios.stream()
                .filter(c -> c.getId() == id)
                .findFirst()
                .map(UsuarioMapper::toResponse)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
