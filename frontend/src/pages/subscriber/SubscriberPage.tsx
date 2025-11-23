import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useHasUser } from "@/hooks/useHasUser";
import BeneficiadosContent from "@/pages/subscriber/content/BeneficiadosContent";
import { TabOptions } from "@/pages/subscriber/SubscriberOptions";
import { CheckCircle, Heart, Star, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssinantePage = () => {
  const { hasUser } = useHasUser();
  const [selectedPlan, setSelectedPlan] = useState("básico");
  const navigate = useNavigate();

  const plans = [
    {
      id: "basico",
      name: "Plano Básico",
      price: "R$ 15",
      period: "mês",
      description: "1 livro por mês + acompanhamento",
      features: [
        "1 livro usado por mês",
        "Conexão com 1 beneficiário",
        "Relatório mensal de impacto",
        "Suporte via email",
      ],
    },
    {
      id: "familia",
      name: "Plano Família",
      price: "R$ 35",
      period: "mês",
      popular: true,
      description: "3 livros por mês + brindes especiais",
      features: [
        "3 livros usados por mês",
        "Conexão com 3 beneficiários",
        "Brindes educativos trimestrais",
        "Relatórios detalhados",
        "Suporte prioritário",
      ],
    },
    {
      id: "transformador",
      name: "Plano Transformador",
      price: "R$ 60",
      period: "mês",
      description: "5 livros + materiais pedagógicos",
      features: [
        "5 livros usados por mês",
        "Conexão com 5 beneficiários",
        "Kit pedagógico trimestral",
        "Relatórios personalizados",
        "Suporte VIP",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Área do <span className="text-primary">Assinante</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gerencie sua assinatura e acompanhe o impacto das suas doações
          </p>
        </div>

        <Tabs defaultValue="planos" className="space-y-8">
          {hasUser && <TabOptions />}

          {/* Planos */}
          <TabsContent value="planos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
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
              ))}
            </div>
          </TabsContent>

          {/* Beneficiários */}
          <TabsContent value="beneficiarios">
            <BeneficiadosContent />
          </TabsContent>

          {/* Perfil */}
          <TabsContent value="perfil">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Perfil</CardTitle>
                <CardDescription>Gerencie suas informações pessoais e preferências</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center text-muted-foreground">
                    <User className="h-12 w-12 mx-auto mb-4" />
                    <p>Área de gerenciamento de perfil em desenvolvimento.</p>
                    <p className="text-sm mt-2">
                      Em breve você poderá editar suas informações, alterar senha e configurar preferências de
                      notificação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AssinantePage;
