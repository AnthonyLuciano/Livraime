package Livraime.Unp.Livraime.controller.dto.mapper;

import java.util.List;
import java.util.stream.Collectors;

import Livraime.Unp.Livraime.controller.dto.request.user.CreateUserDTO;
import Livraime.Unp.Livraime.controller.dto.response.UsuarioResponseDTO;
import Livraime.Unp.Livraime.modelo.Usuario;

public final class UsuarioMapper {

    private UsuarioMapper() {
    }

    public static Usuario createToEntity(CreateUserDTO dto) {
        return new Usuario(
                dto.nome(),
                dto.email(),
                dto.cpf(),
                dto.senha(),
                dto.endereco(),
                dto.telefone(),
                "Verificacao",
                true);
    }

    public static UsuarioResponseDTO toResponse(Usuario u) {
        if (u == null)
            return null;
        String planoNome = null;
        if (u.getPlano() != null) {
            // usa getNivel() para manter consistência com representação dos planos
            planoNome = u.getPlano().getNivel();
        }
        return new UsuarioResponseDTO(
                u.getId(),
                u.getNome(),
                u.getEmail(),
                u.getCpf(),
                u.getEndereco(),
                u.getTelefone(),
                planoNome,
                u.getDataCadastro(),
                u.isAtivo());
    }

    public static List<UsuarioResponseDTO> toResponseList(List<Usuario> usuarios) {
        return usuarios.stream().map(UsuarioMapper::toResponse).collect(Collectors.toList());
    }
}