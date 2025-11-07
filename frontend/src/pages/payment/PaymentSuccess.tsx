import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-soft animate-fade-in">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Pagamento Confirmado!</h2>
          <p className="text-muted-foreground mb-6">
            Sua assinatura foi ativada com sucesso. Você será redirecionado em instantes...
          </p>
          <Button onClick={() => navigate("/assinante")} className="shadow-button">
            Ir para Área do Assinante
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
