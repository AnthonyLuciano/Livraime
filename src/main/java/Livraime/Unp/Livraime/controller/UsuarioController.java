package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.usuario;
import Livraime.Unp.Livraime.modelo.planos;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "usuarios", description = "Gerenciamento de usuarios assinantes")
public class UsuarioController {

    private List<usuario> usuarios = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os usuarios")
    public List<usuario> listarusuarios() {
        usuarios.add(new usuario(1, "joao", "joao@gmail.com", "123123123", "rua padilha", "9999999999", planos.BASICO, LocalDateTime.now(),true, "133231", true));

        return usuarios;
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo usuario")
    public ResponseEntity<usuario> criarusuario(@RequestBody usuario novousuario) {
        usuarios.add(novousuario);
        return ResponseEntity.ok(novousuario);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar usuario por ID")
    public usuario buscarPorId(@PathVariable int id) {
        return usuarios.stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }
}
