package Livraime.Unp.Livraime.modelo;

public enum planos {
    BASICO(1, "basico", "iniciante"),
    MEDIO(2, "medio", "intermediario"),
    AVANCADO(3, "avancado", "expert");

    private final int codigo;
    private final String[] aliases;

    planos(int codigo, String... aliases) {
        this.codigo = codigo;
        this.aliases = aliases;
    }

    public int getCodigo() {
        return codigo;
    }

    public String[] getAliases() {
        return aliases;
    }

    //busca o código ou apelido
    public static planos fromInput(String input) {
        for (planos planos : values()) {
            if (String.valueOf(planos.codigo).equalsIgnoreCase(input)) {
                return planos;
            }
            for (String alias : planos.aliases) {
                if (alias.equalsIgnoreCase(input)) {
                    return planos;
                }
            }
        }
        throw new IllegalArgumentException("Nível inválido: " + input);
    }
}
