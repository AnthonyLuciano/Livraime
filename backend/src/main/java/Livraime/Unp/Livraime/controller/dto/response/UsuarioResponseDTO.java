package Livraime.Unp.Livraime.controller.dto.response;

import java.util.List;
import Livraime.Unp.Livraime.modelo.Role;
import java.time.LocalDateTime;

import Livraime.Unp.Livraime.modelo.Endereco;
import Livraime.Unp.Livraime.modelo.Phone;

public record UsuarioResponseDTO(
                int id,
                String nome,
                String email,
                String cpf,
                Endereco endereco,
                Phone telefone,
                String plano,
                LocalDateTime dataCadastro,
                boolean ativo,
                List<Role> roles) {
}
