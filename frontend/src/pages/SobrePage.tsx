import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Users, Gift, ArrowRight, CheckCircle, Sparkles, Map, Clock, TrendingUp } from "lucide-react";

const SobrePage = () => {
  const steps = [
    {
      icon: Heart,
      title: "Você se Inscreve",
      description:
        "Escolhe um plano de assinatura que cabe no seu orçamento e se torna parte da nossa comunidade transformadora.",
    },
    {
      icon: Users,
      title: "Fazemos a Conexão",
      description:
        "Conectamos você com uma criança específica de uma comunidade periférica que receberá livros mensalmente.",
    },
    {
      icon: BookOpen,
      title: "Selecionamos os Livros",
      description:
        "Nossa equipe e parceiros sebos selecionam livros adequados para a idade e interesse de cada beneficiário.",
    },
    {
      icon: Gift,
      title: "Entregamos com Carinho",
      description: "Os livros são entregues diretamente na comunidade, acompanhados de cartão personalizado seu.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamos o Impacto",
      description: "Você recebe relatórios mensais do progresso e feedback da criança que está sendo impactada.",
    },
  ];

  const communities = ["Comunidade A - Zona Norte de Natal", "Comunidade B - Zona Oeste de Natal"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">O Projeto</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre o <span className="text-secondary">Livrai-me</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma plataforma por assinatura que transforma a generosidade em oportunidades educacionais reais para
            crianças de comunidades periféricas.
          </p>
        </div>

        {/* O Problema */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">Realidade Brasileira</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">O Problema que Enfrentamos</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">4,8 milhões de crianças</strong> brasileiras de 6 a 14 anos não têm
                acesso adequado a livros e materiais de leitura em casa.
              </p>

              <p>
                Apenas <strong className="text-foreground">54% das crianças</strong> dessa faixa etária têm o hábito de
                ler, e a maioria vive em comunidades onde o acesso a bibliotecas e livrarias é limitado ou inexistente.
              </p>

              <p>
                Simultaneamente, milhões de livros usados são descartados anualmente, enquanto poderiam estar
                transformando vidas e expandindo horizontes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 bg-red-50 border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">4,8M</div>
              <div className="text-sm text-red-700">Crianças sem acesso a livros</div>
            </Card>
            <Card className="text-center p-6 bg-orange-50 border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">46%</div>
              <div className="text-sm text-orange-700">Não têm hábito de leitura</div>
            </Card>
            <Card className="text-center p-6 bg-blue-50 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-sm text-blue-700">Moram longe de bibliotecas</div>
            </Card>
            <Card className="text-center p-6 bg-gray-50 border-gray-200">
              <div className="text-3xl font-bold text-gray-600 mb-2">2M+</div>
              <div className="text-sm text-gray-700">Livros descartados por ano</div>
            </Card>
          </div>
        </div>

        {/* Nossa Solução */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nossa <span className="text-primary">Solução</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um processo simples e transparente que conecta generosidade e conhecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, index) => (
              <Card key={index} className="relative hover:shadow-soft transition-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary/20">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
                {index < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {steps.slice(3).map((step, index) => (
              <Card key={index + 3} className="hover:shadow-soft transition-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary/20">{index + 4}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comunidades Atendidas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <span className="text-primary">Comunidades</span> que Atendemos
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Focamos nossos esforços em comunidades periféricas da Grande Natal, onde o acesso à educação de qualidade
              é mais desafiador. Cada comunidade é selecionada através de critérios sociais e necessidades locais.
            </p>

            <ul className="space-y-3">
              {communities.map((community, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{community}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-accent/30 rounded-lg">
              <div className="flex items-center space-x-2 text-accent-foreground">
                <Map className="h-4 w-4" />
                <span className="font-medium">Expansão em Andamento</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Estamos avaliando novas comunidades no interior do estado.
              </p>
            </div>
          </div>

          <Card className="p-8 text-center shadow-soft">
            <div className="space-y-6">
              <Clock className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Impacto em Tempo Real</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">567</div>
                  <div className="text-sm text-muted-foreground">Crianças atendidas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-secondary">2,347</div>
                  <div className="text-sm text-muted-foreground">Livros entregues</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Acompanhe nosso progresso em tempo real e veja como sua contribuição faz parte dessa transformação.
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-soft rounded-2xl p-12">
          <BookOpen className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Pronto para Transformar Vidas?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada assinatura é uma oportunidade de educação. Cada livro é uma janela para um futuro melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assinante">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-button">
                <Heart className="h-5 w-5 mr-2" />
                Começar Agora
              </Button>
            </Link>
            <Link to="/quem-somos">
              <Button variant="outline" size="lg">
                Conhecer a Equipe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobrePage;
