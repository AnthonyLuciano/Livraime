package Livraime.Unp.Livraime.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Embeddable
public class Phone {
    @NotBlank(message = "O DDD não pode estar vazio")
    @Size(min = 2, max = 2, message = "O DDD deve ter exatamente 2 dígitos")
    @Pattern(regexp = "\\d{2}", message = "O DDD deve conter apenas números")
    private String areaCode;

    @NotBlank(message = "O número não pode estar vazio")
    @Pattern(regexp = "\\d{8,9}", message = "O número deve ter 8 ou 9 dígitos")
    @Column(name = "telefone_numero")
    private String number;

    public Phone() {
    }

    public Phone(String areaCode, String number) {
        this.areaCode = areaCode;
        this.number = number;
    }

    public String getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    // Método útil para exibir formatado
    public String toFormattedString() {
        return String.format("(%s) %s", areaCode, number);
    }
}
