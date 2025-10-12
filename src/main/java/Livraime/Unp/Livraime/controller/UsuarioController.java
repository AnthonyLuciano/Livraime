package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.modelo.Planos;
import Livraime.Unp.Livraime.modelo.UsuarioResponseDTO;
import Livraime.Unp.Livraime.mapper.UsuarioMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "usuarios", description = "Gerenciamento de usuarios assinantes")
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os usuarios")
    public List<UsuarioResponseDTO> listarusuarios() {
        usuarios.add(new Usuario(1, "joao", "joao@gmail.com", "123123123", "rua padilha", "9999999999", Planos.BASICO, LocalDateTime.now(),true, "133231", true));
        return UsuarioMapper.toResponseList(usuarios);
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo usuario")
    public ResponseEntity<Usuario> criarusuario(@RequestBody Usuario novousuario) {
        usuarios.add(novousuario);
        return ResponseEntity.ok(novousuario);
    }

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
