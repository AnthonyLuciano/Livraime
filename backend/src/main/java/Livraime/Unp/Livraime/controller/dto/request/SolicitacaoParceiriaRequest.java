package Livraime.Unp.Livraime.controller.dto.request;

public record SolicitacaoParceiriaRequest(
    String nome,
    String email,
    String telefone,
    String tipo,
    String endereco,
    String mensagem
) {}  