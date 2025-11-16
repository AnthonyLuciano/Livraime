package Livraime.Unp.Livraime.exceptions;

public class InactiveAccountException extends RuntimeException {
    public InactiveAccountException() {
        super("Conta inativa. Contate o suporte.");
    }

    public InactiveAccountException(String mensagem) {
        super(mensagem);
    }
}
