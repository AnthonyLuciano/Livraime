package Livraime.Unp.Livraime.controller.dto.response;

public record ResendEmailResponseDTO(
        boolean isEmailResent,
        String message) {
}
