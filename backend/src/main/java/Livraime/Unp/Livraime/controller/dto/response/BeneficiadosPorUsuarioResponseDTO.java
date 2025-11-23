package Livraime.Unp.Livraime.controller.dto.response;

import java.util.List;

public class BeneficiadosPorUsuarioResponseDTO {
    private List<BeneficiadoCompletoDTO> beneficiados;

    public BeneficiadosPorUsuarioResponseDTO() {}

    public BeneficiadosPorUsuarioResponseDTO(List<BeneficiadoCompletoDTO> beneficiados) {
        this.beneficiados = beneficiados;
    }

    public List<BeneficiadoCompletoDTO> getBeneficiados() {
        return beneficiados;
    }

    public void setBeneficiados(List<BeneficiadoCompletoDTO> beneficiados) {
        this.beneficiados = beneficiados;
    }
}