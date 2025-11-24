package Livraime.Unp.Livraime.controller.dto.response;

public record BeneficiadoResponseDTO(
    Long id,
    String nome,
    int idade,
    String estado,
    String descricaoNecessidades,
    Boolean ativo,
    Long clienteAssinanteId
) {}