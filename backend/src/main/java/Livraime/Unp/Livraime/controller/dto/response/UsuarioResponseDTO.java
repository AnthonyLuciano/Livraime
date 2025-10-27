package Livraime.Unp.Livraime.controller.dto.response;

import java.time.LocalDateTime;

public record UsuarioResponseDTO(
        int id,
        String nome,
        String email,
        String cpf,
        String endereco,
        String telefone,
        String plano,
        LocalDateTime dataCadastro,
        boolean ativo) {
}

