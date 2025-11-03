package Livraime.Unp.Livraime.controller.dto.request;

/**
 * Payload mínimo para edição de campos editáveis do usuário.
 * Campos intencionalmente limitados para evitar enviar dados sensíveis.
 * -Anthony
 */
public record UsuarioEditRequest(
        String name,
        String email,
        String address,
        String phone
) {}
