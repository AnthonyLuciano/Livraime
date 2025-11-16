package Livraime.Unp.Livraime.controller.dto.response;

public record LoginResponseDTO(
        UsuarioResponseDTO user,
        String message) {
}