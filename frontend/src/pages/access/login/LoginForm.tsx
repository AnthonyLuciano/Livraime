import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log("Login:", { email, password });
  };

  return (
    <Card className="shadow-soft border-border/50">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold">Bem-vindo de volta!</CardTitle>
        <CardDescription>Acesse sua conta para continuar transformando vidas</CardDescription>
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
            <Link to="/recuperar-senha" className="text-sm text-primary hover:underline">
              Esqueci minha senha
            </Link>
          </div>

          <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-button">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda não tem conta?{" "}
            <Link to="/cadastro" className="text-primary hover:underline font-medium">
              Cadastre-se agora
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
