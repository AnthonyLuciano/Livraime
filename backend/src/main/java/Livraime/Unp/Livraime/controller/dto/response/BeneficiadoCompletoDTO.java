package Livraime.Unp.Livraime.controller.dto.response;

public record BeneficiadoCompletoDTO(
    BeneficiaryDataDTO beneficiaryData,
    String lastBook,
    String message,
    String progress
) {}
