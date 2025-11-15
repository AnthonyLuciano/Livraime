import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterPersonalData } from "@/pages/access/register/personal-data/RegisterPersonalData";
import { RegisterFormData, registerSchema } from "@/pages/access/register/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterAddressData } from "./RegisterAddressData";

export function RegisterForm() {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleRegister = (data: RegisterFormData) => {
    // TODO: Implementar lógica de cadastro com a API
    console.log("Registering user:", data);
  };

  return (
    <Card className="shadow-soft border-border/50 w-full max-w-2xl">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
        <CardDescription>Preencha os dados abaixo para se cadastrar</CardDescription>
      </CardHeader>

      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
            <RegisterPersonalData errors={errors} />
            <RegisterAddressData errors={errors} />

            <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-button">
              Cadastrar
            </Button>
          </form>
        </FormProvider>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Faça login
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
