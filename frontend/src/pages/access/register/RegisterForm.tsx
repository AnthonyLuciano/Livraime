import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateUser } from "@/hooks/tanstack-query/user/useCreateUser";
import { toast } from "@/hooks/use-toast";
import { RegisterPersonalData } from "@/pages/access/register/personal-data/RegisterPersonalData";
import { RegisterFormData, registerSchema } from "@/pages/access/register/register.schema";
import { CreateUserDto } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAddressData } from "./RegisterAddressData";

export function RegisterForm() {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = useCreateUser();
  const navigate = useNavigate();

  function handleRegister(data: RegisterFormData) {
    const user = createFormToUserCreationDto(data);
    mutate(user, {
      onSuccess: () => {
        toast({
          title: "Quase lá! Confirme seu e-mail",
          description: "Enviamos um código de confirmação para o seu e-mail. Verifique sua caixa de entrada.",
        });

        methods.reset();
        setTimeout(() => {
          navigate("/confirmar-email", { state: { email: data.email } });
        }, 2000);
      },
      onError: (error) => {
        toast({
          title: "Erro ao criar usuário",
          description: axios.isAxiosError(error)
            ? error.response.data
            : error instanceof Error
            ? error.message
            : "Erro desconhecido",
        });
      },
    });
  }

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

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-hero hover:opacity-90 shadow-button"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Cadastrando...
                </>
              ) : (
                "Cadastrar"
              )}
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

function createFormToUserCreationDto(formData: RegisterFormData): CreateUserDto {
  const cleanRegex = /\D/g;

  const cleanCPF = formData.cpf.replace(cleanRegex, "");
  const [, areaCode, firstPhoneNumber, secondPhoneNumber] = formData.telefone.match(/\((\d{2})\)\s(\d{4,5})-(\d{4})/);
  const cleanCEP = formData.endereco.zipCode.replace(cleanRegex, "");

  return {
    cpf: cleanCPF,
    email: formData.email,
    nome: formData.nome,
    senha: formData.senha,
    telefone: {
      areaCode,
      number: firstPhoneNumber + secondPhoneNumber,
    },
    endereco: {
      neighborhood: formData.endereco.neighborhood,
      zipCode: cleanCEP,
      city: formData.endereco.city,
      complement: formData.endereco.complement,
      street: formData.endereco.street,
      number: formData.endereco.number,
      state: formData.endereco.state,
    },
  };
}
