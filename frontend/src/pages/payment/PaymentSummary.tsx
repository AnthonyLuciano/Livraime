import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plansDetails = {
  basico: {
    name: "Plano Básico",
    price: "R$ 15",
    features: [
      "1 livro usado por mês",
      "Conexão com 1 beneficiário",
      "Relatório mensal de impacto",
      "Suporte via email",
    ],
  },
  familia: {
    name: "Plano Família",
    price: "R$ 35",
    features: [
      "3 livros usados por mês",
      "Conexão com 3 beneficiários",
      "Brindes educativos trimestrais",
      "Relatórios detalhados",
      "Suporte prioritário",
    ],
  },
  transformador: {
    name: "Plano Transformador",
    price: "R$ 60,00",
    features: [
      "5 livros usados por mês",
      "Conexão com 5 beneficiários",
      "Kit pedagógico trimestral",
      "Relatórios personalizados",
      "Suporte VIP",
    ],
  },
};

interface PaymentSummaryProps {
  selectedPlan?: keyof typeof plansDetails;
}

export function PaymentSummary({ selectedPlan }: PaymentSummaryProps) {
  const plan = selectedPlan ? plansDetails[selectedPlan] : null;

  return (
    <Card className="shadow-card animate-slide-up h-fit sticky top-4">
      <CardHeader>
        <CardTitle>Resumo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!plan ? (
          <p className="text-sm text-muted-foreground text-center py-4">Selecione um plano para ver o resumo</p>
        ) : (
          <>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plano:</span>
                <span className="font-medium">{plan.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Período:</span>
                <span className="font-medium">Mensal</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">{plan.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Cobrado mensalmente</p>
            </div>
            <div className="bg-accent p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-sm text-accent-foreground">Incluído no plano:</h4>
              <ul className="text-xs text-accent-foreground space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
