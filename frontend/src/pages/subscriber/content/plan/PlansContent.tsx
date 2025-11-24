import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllPlans } from "@/hooks/tanstack-query/plan/useGetAllPlans";
import PlanCard from "@/pages/subscriber/content/plan/PlanCard";
import { PlanFromAPI } from "@/types/plan.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlansContent() {
  const [selectedPlan, setSelectedPlan] = useState("basico");
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useGetAllPlans();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

  const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s);

  const plans = data
    ? data.map((p: PlanFromAPI) => {
        const nivel = p.nivel || "";
        const id = nivel.toLowerCase();
        return {
          id,
          name: `Plano ${capitalize(nivel)}`,
          price: formatCurrency(p.valor),
          period: "mês",
          popular: nivel.toLowerCase() === "intermediario",
          description: p.beneficios?.[0]?.descricao ?? "",
          features: p.beneficios?.map((b) => b.descricao ?? b.nome) ?? [],
        };
      })
    : [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <Card key={i} className="opacity-70 animate-pulse">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Carregando...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="h-4 bg-muted rounded-sm" />
                <li className="h-4 bg-muted rounded-sm" />
                <li className="h-4 bg-muted rounded-sm" />
              </ul>
              <Button className="w-full opacity-50" disabled>
                Carregando
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center">
        <p className="mb-4">Erro ao carregar planos.</p>
        <div className="flex justify-center gap-2">
          <Button onClick={() => refetch()}>Tentar novamente</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          navigate={navigate}
        />
      ))}
    </div>
  );
}
