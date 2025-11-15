package Livraime.Unp.Livraime.controller.dto.request;

import Livraime.Unp.Livraime.modelo.Endereco;
import Livraime.Unp.Livraime.modelo.Phone;

/**
 * Payload mínimo para edição de campos editáveis do usuário.
 * Campos intencionalmente limitados para evitar enviar dados sensíveis.
 * -Anthony
 */
public record UsuarioEditRequest(
                String name,
                String email,
                Endereco address,
                Phone phone) {
}
