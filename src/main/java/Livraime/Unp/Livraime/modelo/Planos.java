package Livraime.Unp.Livraime.modelo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum Planos {
    BASICO(1, "BASICO", 50,
            new Beneficio[] {
                    new Beneficio("receive:used_book", "Receber 1 livro usado por mês.")
            },
            "basico", "iniciante"),
    MEDIO(2, "INTERMEDIARIO", 70,
            new Beneficio[] {
                    new Beneficio("receive:used_books", "Receber 2 livros usados por mês."),
                    new Beneficio("participate:raffles", "Participar de sorteios mensais de brindes literários.")
            },
            "medio", "intermediario"),
    AVANCADO(3, "PREMIUM", 100,
            new Beneficio[] {
                    new Beneficio("receive:new_books", "Receber 2 livros novos por mês."),
                    new Beneficio("access:early_content", "Ter acesso antecipado a lançamentos e eventos exclusivos."),
                    new Beneficio("receive:exclusive_gifts", "Receber brindes literários exclusivos como marcadores e pôsteres.")
            },
            "avancado", "expert", "premium");

    private final int codigo;
    private final String nivel;
    private final int valor;
    private final Beneficio[] beneficios;
    private final String[] aliases;

    Planos(int codigo, String nivel, int valor, Beneficio[] beneficios, String... aliases) {
        this.codigo = codigo;
        this.nivel = nivel;
        this.valor = valor;
        this.beneficios = beneficios;
        this.aliases = aliases;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getNivel() {
        return nivel;
    }

    public int getValor() {
        return valor;
    }

    public List<Beneficio> getBeneficios() {
        return Arrays.asList(beneficios);
    }

    public String[] getAliases() {
        return aliases;
    }

    // Converte para DTO que será serializado pelo controller
    public PlanoDTO toDto() {
        List<BeneficioDTO> lista = Arrays.stream(beneficios)
                .map(b -> new BeneficioDTO(b.nome, b.descricao))
                .collect(Collectors.toList());
        return new PlanoDTO(this.nivel, this.valor, lista);
    }

    // busca o código, apelido ou nível
    public static Planos fromInput(String input) {
        for (Planos p : values()) {
            if (String.valueOf(p.codigo).equalsIgnoreCase(input)) {
                return p;
            }
            if (p.nivel.equalsIgnoreCase(input)) {
                return p;
            }
            for (String alias : p.aliases) {
                if (alias.equalsIgnoreCase(input)) {
                    return p;
                }
            }
        }
        throw new IllegalArgumentException("Nível inválido: " + input);
    }

    // helper interno para montar benefícios
    private static class Beneficio {
        final String nome;
        final String descricao;
        Beneficio(String nome, String descricao) {
            this.nome = nome;
            this.descricao = descricao;
        }
    }
}
