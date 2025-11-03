package Livraime.Unp.Livraime.controller.dto.request;

/**
 * Payload mínimo para edição de campos editáveis do parceiro.
 * Campos intencionalmente limitados para evitar enviar dados sensíveis.
 * -Anthony
 */
public record ParceiroEditRequest(
        String nome,
        String tipo,
        String endereco,
        String telefone,
        String email,
        String descricaoServicos
) {}