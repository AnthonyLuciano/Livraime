import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  Heart, 
  Users, 
  Gift, 
  ArrowRight, 
  Star,
  Sparkles,
  Target
} from 'lucide-react';
import heroImage from '@/assets/hero-children-reading.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/50 rounded-full">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-accent-foreground">
                    Transformando vidas através da leitura
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Doe livros,{' '}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    transforme vidas
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Conecte-se com crianças de comunidades periféricas e promova 
                  o acesso à educação através de uma plataforma que leva livros 
                  e esperança diretamente às suas mãos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assinante">
                  <Button size="lg" className="bg-gradient-secondary hover:opacity-90 shadow-button group">
                    <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Assine Agora
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                    Conheça o Projeto
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Crianças atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">2,300+</div>
                  <div className="text-sm text-muted-foreground">Livros doados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Comunidades</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Crianças lendo livros juntas" 
                  className="w-full h-auto rounded-2xl shadow-soft"
                />
                <div className="absolute inset-0 bg-gradient-hero/10 rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-card animate-float">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="font-medium">4.9/5 avaliação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Como Funciona o <span className="text-primary">Livrai-me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples que conecta generosidade e conhecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-soft transition-shadow group">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Você Assina</h3>
              <p className="text-muted-foreground leading-relaxed">
                Escolha um plano mensal que se adeque ao seu orçamento e 
                entre para nossa comunidade de transformadores.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-shadow group">
              <div className="mx-auto mb-6 p-4 bg-secondary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Conectamos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conectamos você com uma criança específica de uma comunidade 
                periférica que receberá livros em seu nome.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-shadow group">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Impacto Real</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompanhe o impacto da sua doação com updates mensais 
                e veja como está transformando uma vida.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Seja parte da transformação
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Pronto para fazer a diferença na vida de uma criança?
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cada assinatura é uma oportunidade de educação. Cada livro é uma 
              janela para um futuro melhor. Comece hoje mesmo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assinante">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-button">
                  <Heart className="h-5 w-5 mr-2" />
                  Começar Agora - R$ 15/mês
                </Button>
              </Link>
              <Link to="/sebos">
                <Button variant="outline" size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Sou Sebo/Autor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;