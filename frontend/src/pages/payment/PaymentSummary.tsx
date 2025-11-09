import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanFromAPI } from "@/types/plan.types";

interface PaymentSummaryProps {
  selectedPlan?: PlanFromAPI;
}

export function PaymentSummary({ selectedPlan }: PaymentSummaryProps) {
  return (
    <Card className="shadow-card animate-slide-up h-fit sticky top-4">
      <CardHeader>
        <CardTitle>Resumo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!selectedPlan ? (
          <p className="text-sm text-muted-foreground text-center py-4">Selecione um plano para ver o resumo</p>
        ) : (
          <>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plano:</span>
                <span className="font-medium">Plano {selectedPlan.nivel.toLowerCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Período:</span>
                <span className="font-medium">Mensal</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">{selectedPlan.valor}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Cobrado mensalmente</p>
            </div>
            <div className="bg-accent p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-sm text-accent-foreground">Incluído no plano:</h4>
              <ul className="text-xs text-accent-foreground space-y-1">
                {selectedPlan.beneficios?.map((beneficio, i) => (
                  <li key={i}>✓ {beneficio.descricao}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
