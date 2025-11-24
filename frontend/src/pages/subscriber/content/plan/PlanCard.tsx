import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Star } from "lucide-react";

interface PlanCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    period: string;
    popular: boolean;
    description: string;
    features: string[];
  };
  selectedPlan: string;
  setSelectedPlan: (id: string) => void;
  navigate: (path: string) => void;
}

export default function PlanCard({ plan, selectedPlan, setSelectedPlan, navigate }: PlanCardProps) {
  return (
    <Card
      key={plan.id}
      className={`relative cursor-pointer transition-all hover:shadow-soft ${
        plan.popular
          ? "ring-2 ring-secondary shadow-soft scale-105"
          : selectedPlan === plan.id
          ? "ring-2 ring-primary"
          : ""
      }`}
      onClick={() => setSelectedPlan(plan.id)}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-secondary text-secondary-foreground">
            <Star className="h-3 w-3 mr-1" />
            Mais Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <div className="space-y-2">
          <div className="flex items-baseline justify-center space-x-1">
            <span className="text-3xl font-bold text-primary">{plan.price}</span>
            <span className="text-muted-foreground">/{plan.period}</span>
          </div>
          <CardDescription>{plan.description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            plan.popular ? "bg-gradient-secondary hover:opacity-90" : "bg-gradient-primary hover:opacity-90"
          } shadow-button`}
          onClick={() => navigate("/pagamento")}
        >
          <Heart className="h-4 w-4 mr-2" />
          Assinar Agora
        </Button>
      </CardContent>
    </Card>
  );
}
