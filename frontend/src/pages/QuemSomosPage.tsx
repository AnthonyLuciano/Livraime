import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Target,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';

const QuemSomosPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossa História</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem <span className="text-primary">Somos</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma organização dedicada a transformar vidas através da educação, 
            conectando corações generosos a crianças que precisam de oportunidades.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-soft transition-shadow">
            <CardContent className="p-8">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à leitura e educação para crianças de comunidades 
                periféricas através de uma rede solidária de doação de livros.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-shadow">
            <CardContent className="p-8">
              <div className="mx-auto mb-6 p-4 bg-secondary/10 rounded-2xl w-fit">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal plataforma nacional de impacto social educacional, 
                transformando o Brasil através da leitura e do conhecimento.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-shadow">
            <CardContent className="p-8">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solidariedade, transparência, educação inclusiva e impacto social 
                medido guiam todas as nossas ações e decisões.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nossa História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Como Nasceu o <span className="text-secondary">Livrai-me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O projeto Livrai-me nasceu da observação de uma realidade preocupante: 
                milhões de crianças brasileiras não têm acesso a livros e materiais 
                educacionais adequados em suas comunidades.
              </p>
              
              <p>
                Ao mesmo tempo, percebemos que muitas pessoas têm o desejo de ajudar, 
                mas não sabem como fazer isso de forma efetiva e transparente. Foi então 
                que surgiu a ideia de criar uma ponte entre esses dois mundos.
              </p>
              
              <p>
                Começamos pequeno, com apenas algumas famílias e um sebo parceiro. 
                Hoje, já impactamos centenas de vidas e continuamos crescendo com 
                o objetivo de transformar a realidade educacional do nosso país.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6 bg-gradient-primary text-white">
              <BookOpen className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">2,347</div>
              <div className="text-sm opacity-90">Livros doados</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-secondary text-white">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">567</div>
              <div className="text-sm opacity-90">Crianças impactadas</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-primary text-white">
              <Heart className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">89</div>
              <div className="text-sm opacity-90">Assinantes ativos</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-secondary text-white">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">25</div>
              <div className="text-sm opacity-90">Sebos parceiros</div>
            </Card>
          </div>
        </div>

        {/* Equipe */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Somos um time apaixonado por educação e impacto social, 
            trabalhando incansavelmente para transformar vidas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nome: "Ana Carolina Silva",
                cargo: "Fundadora & CEO",
                descricao: "Educadora há 15 anos, especialista em políticas públicas educacionais."
              },
              {
                nome: "Carlos Eduardo Santos",
                cargo: "Diretor de Parcerias",
                descricao: "Especialista em relacionamentos institucionais e desenvolvimento de negócios."
              },
              {
                nome: "Marina Oliveira",
                cargo: "Coordenadora de Impacto",
                descricao: "Psicóloga social dedicada à mensuração e acompanhamento de resultados."
              }
            ].map((membro, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {membro.nome.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{membro.nome}</h3>
                  <p className="text-primary font-medium mb-3">{membro.cargo}</p>
                  <p className="text-sm text-muted-foreground">{membro.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-soft rounded-2xl p-12">
          <Heart className="h-12 w-12 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Junte-se à Nossa Missão
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada pessoa que se une ao Livrai-me multiplica nosso impacto. 
            Seja você também um agente de transformação!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosPage;