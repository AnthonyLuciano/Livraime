package Livraime.Unp.Livraime.controller.dto.request;

import Livraime.Unp.Livraime.modelo.Endereco;

/**
 * Payload mínimo para edição de campos editáveis do usuário.
 * Campos intencionalmente limitados para evitar enviar dados sensíveis.
 * -Anthony
 */
public record UsuarioEditRequest(
                String name,
                String email,
                Endereco address,
                String phone) {
}
