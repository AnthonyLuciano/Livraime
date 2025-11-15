package Livraime.Unp.Livraime.controller.dto.request.user;

import Livraime.Unp.Livraime.modelo.Endereco;
import Livraime.Unp.Livraime.modelo.Phone;
import Livraime.Unp.Livraime.modelo.Plano;

public record CreateUserDTO(
        String nome,
        String email,
        String cpf,
        String senha,
        Endereco endereco,
        Phone telefone,
        Plano plano) {
}