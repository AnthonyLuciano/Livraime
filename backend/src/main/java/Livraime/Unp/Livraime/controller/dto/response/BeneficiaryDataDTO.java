package Livraime.Unp.Livraime.controller.dto.response;

public class BeneficiaryDataDTO {
    private String name;
    private int age;
    private String locale;

    public BeneficiaryDataDTO() {}

    public BeneficiaryDataDTO(String name, int age, String locale) {
        this.name = name;
        this.age = age;
        this.locale = locale;
    }

    // Getters e Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    
    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }
}