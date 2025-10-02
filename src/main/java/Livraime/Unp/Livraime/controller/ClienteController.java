package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.cliente;
import Livraime.Unp.Livraime.modelo.planos;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@Tag(name = "Clientes", description = "Gerenciamento de clientes assinantes")
public class ClienteController {

    private List<cliente> clientes = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os clientes")
    public List<cliente> listarClientes() {
        clientes.add(new cliente(1, "joao", "joao@gmail.com", "123123123", "rua padilha", "9999999999", planos.BASICO, LocalDateTime.now(),true, 10));

        return clientes;
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo cliente")
    public ResponseEntity<cliente> criarCliente(@RequestBody cliente novoCliente) {
        clientes.add(novoCliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar cliente por ID")
    public cliente buscarPorId(@PathVariable int id) {
        return clientes.stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }
}
