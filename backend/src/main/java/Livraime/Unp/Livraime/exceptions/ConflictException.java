package Livraime.Unp.Livraime.exceptions;

public class ConflictException extends Exception {

    private static final long serialVersionUID = 1L;

    public ConflictException() {
        super("Conflito detectado.");
    }

    public ConflictException(String message) {
        super(message);
    }

    public ConflictException(String message, Throwable cause) {
        super(message, cause);
    }
}
