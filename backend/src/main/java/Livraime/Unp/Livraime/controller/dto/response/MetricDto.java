package Livraime.Unp.Livraime.controller.dto.response;

public class MetricDto {
    private String mes;
    private long inscricoes;
    private long livrosDoados;
    private long parceiros;

    public MetricDto() {}

    public MetricDto(String mes, long inscricoes, long livrosDoados, long parceiros) {
        this.mes = mes;
        this.inscricoes = inscricoes;
        this.livrosDoados = livrosDoados;
        this.parceiros = parceiros;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public long getInscricoes() {
        return inscricoes;
    }

    public void setInscricoes(long inscricoes) {
        this.inscricoes = inscricoes;
    }

    public long getLivrosDoados() {
        return livrosDoados;
    }

    public void setLivrosDoados(long livrosDoados) {
        this.livrosDoados = livrosDoados;
    }

    public long getParceiros() {
        return parceiros;
    }

    public void setParceiros(long parceiros) {
        this.parceiros = parceiros;
    }
}