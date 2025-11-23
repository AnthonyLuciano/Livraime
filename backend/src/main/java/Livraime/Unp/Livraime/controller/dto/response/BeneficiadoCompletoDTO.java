package Livraime.Unp.Livraime.controller.dto.response;

public class BeneficiadoCompletoDTO {
    private BeneficiaryDataDTO beneficiaryData;
    private String lastBook;
    private String message;
    private String progress;

    public BeneficiadoCompletoDTO() {}

    public BeneficiadoCompletoDTO(BeneficiaryDataDTO beneficiaryData, String lastBook, String message, String progress) {
        this.beneficiaryData = beneficiaryData;
        this.lastBook = lastBook;
        this.message = message;
        this.progress = progress;
    }

    // Getters e Setters
    public BeneficiaryDataDTO getBeneficiaryData() { return beneficiaryData; }
    public void setBeneficiaryData(BeneficiaryDataDTO beneficiaryData) { this.beneficiaryData = beneficiaryData; }
    
    public String getLastBook() { return lastBook; }
    public void setLastBook(String lastBook) { this.lastBook = lastBook; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    public String getProgress() { return progress; }
    public void setProgress(String progress) { this.progress = progress; }
}