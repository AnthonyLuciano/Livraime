import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para Home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-3 bg-gradient-hero rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Livrai-me
            </span>
          </div>
        </div>

        {/* Login Form */}
        <Card className="shadow-soft border-border/50">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Bem-vindo de volta!</CardTitle>
            <CardDescription>
              Acesse sua conta para continuar transformando vidas
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10 focus:ring-primary focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Link 
                  to="/recuperar-senha" 
                  className="text-sm text-primary hover:underline"
                >
                  Esqueci minha senha
                </Link>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-button">
                Entrar
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Ainda não tem conta?{' '}
                <Link to="/assinante" className="text-primary hover:underline font-medium">
                  Assine agora
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Access */}
        <Card className="shadow-soft border-secondary/20 bg-secondary/5">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-secondary">Acesso Demo</h3>
              <p className="text-sm text-muted-foreground">
                Para testar a plataforma, use:
              </p>
              <div className="text-sm bg-muted/50 p-3 rounded-lg space-y-1">
                <div><strong>E-mail:</strong> demo@livrai-me.org</div>
                <div><strong>Senha:</strong> demo123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;