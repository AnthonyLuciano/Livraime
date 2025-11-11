import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";

interface SubmitButtonProps {
  isProcessing: boolean;
}

export default function SubmitButton({ isProcessing }: SubmitButtonProps) {
  return (
    <>
      <Button type="submit" className="w-full shadow-button" disabled={isProcessing}>
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processando Pagamento...
          </>
        ) : (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Confirmar Pagamento
          </>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        <Lock className="w-3 h-3 inline mr-1" />
        Pagamento seguro e criptografado
      </p>
    </>
  );
}
