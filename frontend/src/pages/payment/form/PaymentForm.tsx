import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PersonalData from "@/pages/payment/form/PersonalData";
import { PlanFromAPI } from "@/types/plan.types";
import { PaymentFormData } from "@/types/validators/payment.schema";
import { CreditCard, Loader2, Lock } from "lucide-react";
import { useFormContext } from "react-hook-form";
import CardData from "./CardData";
import SelectPlan from "./SelectPlan";

interface PaymentFormProps {
  onSubmit: (data: unknown) => void;
  isProcessing: boolean;
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanFromAPI>>;
}

export function PaymentForm({ onSubmit, isProcessing, setSelectedPlan }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<PaymentFormData>();

  console.log("👀 Valores atuais:", watch());

  return (
    <Card className="md:col-span-2 shadow-card animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          Dados de Pagamento
        </CardTitle>
        <CardDescription>Preencha os dados abaixo para concluir sua assinatura</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <SelectPlan errors={errors} setFormValue={setValue} setSelectedPlan={setSelectedPlan} />
          <PersonalData register={register} errors={errors} />
          <CardData register={register} errors={errors} />

          <Button type="submit" className="w-full shadow-button" disabled={isProcessing}>
            {isProcessing ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin"> Processando Pagamento... </Loader2>
            ) : (
              <Lock className="w-4 h-4 mr-2"> Confirmar Pagamento </Lock>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            <Lock className="w-3 h-3 inline mr-1" />
            Pagamento seguro e criptografado
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
