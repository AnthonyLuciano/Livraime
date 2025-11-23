package Livraime.Unp.Livraime.controller.dto.response;

import java.util.List;

public record BeneficiadosPorUsuarioResponseDTO(
    List<BeneficiadoCompletoDTO> beneficiados
) {}
