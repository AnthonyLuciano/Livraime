package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.admin;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
@Tag(name = "Admins", description = "Gerenciamento de administradores")
public class AdminController {

    private List<admin> admins = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os administradores")
    public List<admin> listarAdmins() {
        return admins;
    }

    @PostMapping
    @Operation(summary = "Criar novo administrador")
    public admin criarAdmin(@RequestBody admin novoAdmin) {
        admins.add(novoAdmin);
        return novoAdmin;
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar administrador por ID")
    public admin buscarPorId(@PathVariable int id) {
        return admins.stream().filter(a -> a.getId() == id).findFirst().orElse(null);
    }
}
