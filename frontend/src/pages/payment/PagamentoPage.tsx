import { toast } from "@/hooks/use-toast";
import { PaymentFormData, paymentSchema } from "@/types/validators/payment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PaymentForm } from "./form/PaymentForm";
import { PaymentSuccess } from "./PaymentSuccess";

export default function PagamentoPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const methods = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const selectedPlan = methods.watch("plan");

  const onSubmit = async (data: PaymentFormData) => {
    setIsProcessing(true);

    // Simular processamento de pagamento
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsProcessing(false);
    setPaymentSuccess(true);

    toast({
      title: "Pagamento confirmado!",
      description: `Plano "${data.plan.nivel.toLowerCase()}" ativado com sucesso.`,
    });

    // Redirecionar após 3 segundos
    setTimeout(() => {
      navigate("/assinante");
    }, 3000);
  };

  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Finalizar Assinatura</h1>
          <p className="text-muted-foreground">Complete suas informações para ativar seu plano</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FormProvider {...methods}>
            <PaymentForm onSubmit={methods.handleSubmit(onSubmit)} isProcessing={isProcessing} />
          </FormProvider>
          {/* <PaymentSummary selectedPlan={selectedPlan} /> */}
        </div>
      </div>
    </div>
  );
}
