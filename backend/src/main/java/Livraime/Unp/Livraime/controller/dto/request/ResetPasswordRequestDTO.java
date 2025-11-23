package Livraime.Unp.Livraime.controller.dto.request;

public record ResetPasswordRequestDTO(
    String email,
    String code,
    String newPassword
) {}
