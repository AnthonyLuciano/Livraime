import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, 
  Users, 
  HandHeart, 
  Mail, 
  Phone,
  MapPin,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { api } from '@/config/api';

const SebosPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: '',
    endereco: '',
    mensagem: ''
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset messages
    setSuccess(null);
    setError(null);

    // Send to backend
    const submit = async () => {
      try {
        setSending(true);
        const payload = {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          tipo: formData.tipo,
          endereco: formData.endereco,
          mensagem: formData.mensagem,
        };

        const resp = await api.post('/api/parceiros/solicitar', payload);
        setSuccess('Solicitação enviada com sucesso! Aguardaremos seu contato.');
        setFormData({ nome: '', email: '', telefone: '', tipo: '', endereco: '', mensagem: '' });
        return resp;
      } catch (err: any) {
        console.error('Erro ao enviar solicitação de parceiro:', err);
        const msg = err?.response?.data || err.message || 'Erro desconhecido';
        setError(String(msg));
      } finally {
        setSending(false);
      }
    };

    void submit();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Seja um Parceiro</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sebos e <span className="text-secondary">Autores Independentes</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Junte-se ao Livrai-me e transforme seus livros usados em oportunidades 
            de educação para crianças de comunidades periféricas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Conteúdo Informativo */}
          <div className="space-y-8">
            {/* Como Funciona */}
            <Card className="border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <HandHeart className="h-6 w-6" />
                  <span>Como Funciona a Parceria</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cadastro e Avaliação</h4>
                    <p className="text-sm text-muted-foreground">
                      Cadastre-se conosco e passe por nossa avaliação de qualidade e adequação.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fornecimento de Livros</h4>
                    <p className="text-sm text-muted-foreground">
                      Forneça livros usados em bom estado, adequados para crianças de 6 a 14 anos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Distribuição e Impacto</h4>
                    <p className="text-sm text-muted-foreground">
                      Seus livros chegam às crianças e você recebe relatórios do impacto gerado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios */}
            <Card className="border-secondary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-secondary">
                  <CheckCircle className="h-6 w-6" />
                  <span>Benefícios da Parceria</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Impacto social medido e comprovado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Divulgação do seu sebo/trabalho na nossa plataforma</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Certificado de responsabilidade social</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Networking com outros parceiros sociais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Relatórios mensais de impacto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Sebos Parceiros</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-2xl font-bold text-secondary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Autores Independentes</div>
              </Card>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="shadow-soft sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Torne-se um Parceiro</span>
              </CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em até 48 horas
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome / Nome do Sebo *</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome ou nome do estabelecimento"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Parceria *</Label>
                  <Select onValueChange={(value) => handleInputChange('tipo', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sebo">Sebo / Livraria</SelectItem>
                      <SelectItem value="autor">Autor Independente</SelectItem>
                      <SelectItem value="editora">Editora</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="endereco">Localização</Label>
                  <Input
                    id="endereco"
                    placeholder="Cidade, Estado"
                    value={formData.endereco}
                    onChange={(e) => handleInputChange('endereco', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Conte-nos mais sobre seu interesse em ser parceiro..."
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                  />
                </div>
                
                <Button type="submit" disabled={sending} className="w-full bg-gradient-hero hover:opacity-90 shadow-button">
                  <Users className="h-4 w-4 mr-2" />
                  Enviar Solicitação
                </Button>
                {sending && (
                  <p className="text-sm text-muted-foreground text-center">Enviando...</p>
                )}
                {success && (
                  <p className="text-sm text-green-600 text-center">{success}</p>
                )}
                {error && (
                  <p className="text-sm text-red-600 text-center">Erro: {error}</p>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda em ser contatado pela nossa equipe
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SebosPage;