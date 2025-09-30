package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.cliente;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@Tag(name = "Clientes", description = "Gerenciamento de clientes assinantes")
public class ClienteController {

    private List<cliente> clientes = new ArrayList<>();

    @GetMapping
    @Operation(summary = "Listar todos os clientes")
    public List<cliente> listarClientes() {
        return clientes;
    }

    @PostMapping
    @Operation(summary = "Cadastrar novo cliente")
    public cliente criarCliente(@RequestBody cliente novoCliente) {
        clientes.add(novoCliente);
        return novoCliente;
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar cliente por ID")
    public cliente buscarPorId(@PathVariable int id) {
        return clientes.stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }
}
