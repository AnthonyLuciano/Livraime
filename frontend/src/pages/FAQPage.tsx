import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      category: "Sobre a Plataforma",
      items: [
        {
          question: "Como funciona o Livrai-me?",
          answer: "O Livrai-me é uma plataforma por assinatura que conecta pessoas generosas a crianças de comunidades periféricas. Você escolhe um plano mensal, e nós enviamos livros usados em excelente estado para uma criança específica com quem você será conectado. Você acompanha o progresso através de relatórios mensais."
        },
        {
          question: "Quais são os planos disponíveis?",
          answer: "Oferecemos três planos: Básico (R$ 15/mês - 1 livro), Família (R$ 35/mês - 3 livros + brindes), e Transformador (R$ 60/mês - 5 livros + kit pedagógico). Todos incluem conexão com beneficiários e relatórios de impacto."
        },
        {
          question: "Como são selecionadas as crianças beneficiárias?",
          answer: "Trabalhamos com organizações locais e escolas em comunidades periféricas da Grande Natal. As crianças são selecionadas com base em critérios socioeconômicos e necessidades educacionais, sempre com autorização dos responsáveis."
        }
      ]
    },
    {
      category: "Pagamentos e Assinatura",
      items: [
        {
          question: "Como funciona a cobrança?",
          answer: "A cobrança é mensal e automática no cartão de crédito cadastrado. Você pode cancelar a qualquer momento sem multa ou taxa de cancelamento. O primeiro mês é cobrado imediatamente após a assinatura."
        },
        {
          question: "Posso pausar minha assinatura?",
          answer: "Sim! Você pode pausar sua assinatura por até 3 meses através da sua área do assinante. Durante a pausa, não há cobrança e você pode reativar quando desejar."
        },
        {
          question: "Há desconto para assinaturas anuais?",
          answer: "Atualmente oferecemos apenas planos mensais, mas estamos desenvolvendo opções de desconto para compromissos de longo prazo. Cadastre-se em nossa newsletter para ser o primeiro a saber."
        }
      ]
    },
    {
      category: "Livros e Entrega",
      items: [
        {
          question: "Que tipos de livros são enviados?",
          answer: "Enviamos livros usados em excelente estado, adequados para idades de 6 a 14 anos. Incluem literatura infantojuvenil, didáticos, história em quadrinhos educativas e livros de conhecimento geral. Todos passam por curadoria pedagógica."
        },
        {
          question: "Como garantem a qualidade dos livros?",
          answer: "Nossos sebos parceiros seguem critérios rigorosos de seleção. Os livros devem estar em excelente estado de conservação, sem páginas danificadas, com conteúdo apropriado para a faixa etária e educacionalmente relevante."
        },
        {
          question: "Quando os livros são entregues?",
          answer: "As entregas acontecem entre os dias 1 e 15 de cada mês, diretamente nas comunidades parceiras. Você recebe notificação por email quando a entrega é realizada, junto com fotos e feedback da criança."
        }
      ]
    },
    {
      category: "Impacto e Acompanhamento",
      items: [
        {
          question: "Como acompanho o impacto da minha doação?",
          answer: "Você recebe relatórios mensais por email com fotos (quando autorizado), feedback da criança, progresso na leitura e informações sobre como sua contribuição está fazendo a diferença na vida dela."
        },
        {
          question: "Posso me comunicar com a criança beneficiária?",
          answer: "Por questões de segurança e privacidade, não permitimos comunicação direta. Porém, você pode enviar mensagens de incentivo através da nossa plataforma, que serão repassadas pelos educadores locais."
        },
        {
          question: "E se eu quiser visitar a comunidade?",
          answer: "Organizamos visitas guiadas trimestrais para assinantes interessados. São eventos especiais onde você pode conhecer as comunidades e ver de perto o impacto do projeto, sempre respeitando a privacidade das famílias."
        }
      ]
    },
    {
      category: "Para Sebos e Autores",
      items: [
        {
          question: "Como posso me tornar um sebo parceiro?",
          answer: "Entre em contato através do nosso formulário na página 'Sebos e Autores'. Avaliamos parceiros com base na qualidade do acervo, localização, comprometimento social e capacidade de fornecimento regular."
        },
        {
          question: "Que benefícios têm os sebos parceiros?",
          answer: "Sebos parceiros recebem certificado de responsabilidade social, divulgação na nossa plataforma, participação em eventos, networking com outros parceiros e a satisfação de contribuir para a educação infantil."
        },
        {
          question: "Autores independentes podem participar?",
          answer: "Sim! Autores podem doar exemplares de suas obras ou participar de eventos literários nas comunidades. É uma excelente forma de divulgar seu trabalho enquanto contribui socialmente."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Perguntas Frequentes</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como Podemos <span className="text-primary">Ajudar</span>?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as principais dúvidas sobre o Livrai-me. 
            Se não encontrar o que procura, nossa equipe está pronta para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="shadow-soft">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                      {category.category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                          <AccordionTrigger className="text-left hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contato Rápido */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <MessageCircle className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-lg font-semibold">Ainda tem dúvidas?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe está pronta para ajudar você!
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>contato@livrai-me.org</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(11) 99999-9999</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Falar Conosco
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Começar Agora */}
            <Card className="shadow-soft border-secondary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Sparkles className="h-12 w-12 mx-auto text-secondary" />
                  <h3 className="text-lg font-semibold">Pronto para começar?</h3>
                  <p className="text-sm text-muted-foreground">
                    Transforme uma vida hoje mesmo com apenas R$ 15/mês
                  </p>
                  
                  <Link to="/assinante">
                    <Button className="w-full bg-gradient-secondary hover:opacity-90" size="sm">
                      Assinar Agora
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Links Úteis */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sobre o Projeto
                    </Link>
                  </li>
                  <li>
                    <Link to="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Quem Somos
                    </Link>
                  </li>
                  <li>
                    <Link to="/sebos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sebos e Autores
                    </Link>
                  </li>
                  <li>
                    <Link to="/assinante" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Área do Assinante
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;