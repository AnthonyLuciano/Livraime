package Livraime.Unp.Livraime.exceptions;

public class EmailNotVerifiedException extends RuntimeException {
    public EmailNotVerifiedException() {
        super("Confirme seu e-mail para acessar o sistema.");
    }

    public EmailNotVerifiedException(String message) {
        super(message);
    }
}
