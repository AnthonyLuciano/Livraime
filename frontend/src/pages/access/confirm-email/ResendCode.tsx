import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useResendEmailConfirmationCode } from "@/pages/access/confirm-email/useResendConfirmationCode";
import { EmailConfirmationFormData } from "@/types/auth.type";
import { createErrorMessage } from "@/utils/factories/error.factory";
import { Loader2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface ResendCodeProps {
  form: UseFormReturn<EmailConfirmationFormData>;
}

export function ResendCode({ form }: ResendCodeProps) {
  const { trigger, getValues } = form;
  const { mutate: resendCodeTo, isPending } = useResendEmailConfirmationCode();

  async function handleResendCode() {
    const isEmailValid = await trigger("email");
    if (!isEmailValid) return;

    const email = getValues("email");
    resendCodeTo(email, {
      onSuccess: () => {
        toast({
          title: "Código reenviado!",
          description: "Verifique sua caixa de entrada (e a de spam).",
          duration: 3000,
        });
      },
      onError: (error) => {
        toast({ title: "Erro ao reenviar código", description: createErrorMessage(error), duration: 5000 });
      },
    });
  }

  return (
    <div className="mt-6 text-left text-sm">
      <p className="text-muted-foreground flex gap-3">
        Não recebeu o código?
        <Button
          variant="link"
          type="button"
          className="text-primary hover:underline font-medium p-0 h-auto"
          onClick={handleResendCode}
          disabled={isPending}
        >
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          Reenviar código
        </Button>
      </p>
    </div>
  );
}
