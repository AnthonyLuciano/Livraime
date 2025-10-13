package Livraime.Unp.Livraime.controller.dto.response;

public class UsuarioCreateDTO {
    private String nome;
    private String cpf;
    private String senha;
    private Contato contato;
    private String endereco;
    private String plano;

    public UsuarioCreateDTO() {}

    public UsuarioCreateDTO(String nome, String cpf, String senha, Contato contato, String endereco, String plano) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.contato = contato;
        this.endereco = endereco;
        this.plano = plano;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public Contato getContato() { return contato; }
    public void setContato(Contato contato) { this.contato = contato; }

    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }

    public String getPlano() { return plano; }
    public void setPlano(String plano) { this.plano = plano; }

    public static class Contato {
        private String email;
        private String telefone;

        public Contato() {}

        public Contato(String email, String telefone) {
            this.email = email;
            this.telefone = telefone;
        }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getTelefone() { return telefone; }
        public void setTelefone(String telefone) { this.telefone = telefone; }
    }
}