import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle, CreditCard, Heart, Star, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const AssinantePage = () => {
  const [selectedPlan, setSelectedPlan] = useState("basico");
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

  const beneficiaries = [
    {
      id: 1,
      name: "Ana Julia Santos",
      age: 8,
      community: "Comunidade A",
      lastBook: "Pequeno Príncipe",
      progress: "Leu 5 livros este ano",
    },
    {
      id: 2,
      name: "Miguel Oliveira",
      age: 10,
      community: "Comunidade B",
      lastBook: "Harry Potter - Pedra Filosofal",
      progress: "Melhorou as notas em português",
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
          <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-auto">
            <TabsTrigger value="planos" className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Planos</span>
            </TabsTrigger>
            <TabsTrigger value="beneficiarios" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Beneficiários</span>
            </TabsTrigger>
            {/* <TabsTrigger value="historico" className="flex items-center space-x-2">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">Histórico</span>
            </TabsTrigger> */}
            <TabsTrigger value="perfil" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
          </TabsList>

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
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Seus Beneficiários</h2>
                <p className="text-muted-foreground">
                  Conheça as crianças que estão sendo impactadas pela sua generosidade
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beneficiaries.map((beneficiary) => (
                  <Card key={beneficiary.id} className="hover:shadow-soft transition-shadow">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {beneficiary.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{beneficiary.name}</CardTitle>
                          <CardDescription>
                            {beneficiary.age} anos • {beneficiary.community}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="text-sm">
                            <strong>Último livro:</strong> {beneficiary.lastBook}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-secondary" />
                          <span className="text-sm">
                            <strong>Progresso:</strong> {beneficiary.progress}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-accent/30 rounded-lg">
                        <p className="text-sm text-accent-foreground italic">
                          "Muito obrigada pelo livro! Eu adorei a história do Pequeno Príncipe. Já li 3 vezes!" - Ana
                          Julia
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Histórico
          <TabsContent value="historico">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="h-5 w-5 text-secondary" />
                  <span>Histórico de Doações</span>
                </CardTitle>
                <CardDescription>
                  Acompanhe todas as suas contribuições e o impacto gerado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: '10/10/2025', book: 'Pequeno Príncipe', beneficiary: 'Ana Julia Santos', status: 'Entregue' },
                    { date: '09/10/2025', book: 'Harry Potter', beneficiary: 'Miguel Oliveira', status: 'Entregue' },
                    { date: '21/05/2025', book: 'Turma da Mônica', beneficiary: 'Ana Julia Santos', status: 'Entregue' }
                  ].map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{donation.book}</div>
                        <div className="text-sm text-muted-foreground">
                          Para: {donation.beneficiary} • {donation.date}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        {donation.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

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
