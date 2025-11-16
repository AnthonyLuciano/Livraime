import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";
import { authService } from "@/services/auth.service";
import { EmailConfirmationFormData } from "@/types/auth.type";
import { emailConfirmationSchema } from "@/types/validators/email-confirmation.schema";
import { createErrorMessage } from "@/utils/factories/error.factory";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export function EmailConfirmationForm() {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm<EmailConfirmationFormData>({
    resolver: zodResolver(emailConfirmationSchema),
    defaultValues: {
      email: location.state?.email || "",
      code: "",
    },
    mode: "onChange", // Adicionado para validar as mudanças em tempo real
  });

  async function onSubmit(data: EmailConfirmationFormData) {
    setIsPending(true);
    try {
      await authService.confirmEmail(data);
      handleSuccess();
    } catch (error) {
      showErrorToast(error);
    } finally {
      setIsPending(false);
    }
  }

  function handleSuccess() {
    toast({
      title: "E-mail confirmado com sucesso!",
      description: "Você será redirecionado para a página de login.",
    });
    navigate("/login");
  }

  function showErrorToast(error: unknown) {
    toast({
      title: "Erro ao confirmar e-mail",
      description: createErrorMessage(error),
    });
  }

  return (
    <Card className="shadow-soft border-border/50">
      <CardHeader className="text-left space-y-2">
        <CardTitle className="text-2xl font-bold">Confirme seu E-mail</CardTitle>
        <CardDescription>
          Enviamos um código de 6 dígitos para o seu e-mail. Por favor, insira-o abaixo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // previne reload da página
              form.handleSubmit(onSubmit)(e); // chama o handleSubmit do React Hook Form
            }}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly placeholder="seu@email.com" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Código de Verificação</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>O código expira em 10 minutos.</FormDescription>
                  {error && <p className="text-sm text-destructive">{error.message}</p>}
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending} className="w-full bg-gradient-hero hover:opacity-90">
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Confirmar"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-left text-sm">
          <p className="text-muted-foreground">
            Não recebeu o código? <button className="text-primary hover:underline font-medium">Reenviar código</button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
