import { useCreateUser } from "@/hooks/tanstack-query/user/useCreateUser";
import { toast } from "@/hooks/use-toast";
import { PaymentSummary } from "@/pages/payment/PaymentSummary";
import { PlanFromAPI } from "@/types/plan.types";
import { PaymentFormData, paymentSchema } from "@/types/validators/payment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PaymentForm } from "./form/PaymentForm";
import { PaymentSuccess } from "./PaymentSuccess";

export default function PagamentoPage() {
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanFromAPI | null>(null);

  const { mutate: createUser, isPending: isProcessing } = useCreateUser();

  const methods = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormData) => {
    createUser(
      {
        nome: data.name,
        email: data.email,
        cpf: data.cpf,
        senha: data.password,
        // endereco: data.,
        telefone: "",
        plano: data.plan.nivel,
        dataCadastro: "",
        codigoVerificacao: "",
        endereco: "",
        // senha: "",
      },
      {
        onSuccess: () => {
          setPaymentSuccess(true);

          toast({
            title: "Pagamento confirmado!",
            description: `Plano "${data.plan.nivel.toLowerCase()}" ativado com sucesso.`,
          });

          // Redirecionar após 3 segundos
          setTimeout(() => {
            navigate("/assinante");
          }, 3000);
        },
        onError: (error) => {
          console.error("Erro ao criar usuário:", error);
          toast({
            title: "Erro ao criar usuário",
            description: axios.isAxiosError(error) ? error.response.data : error.message,
          });
        },
      }
    );
  };

  if (paymentSuccess) return <PaymentSuccess />;

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Finalizar Assinatura</h1>
          <p className="text-muted-foreground">Complete suas informações para ativar seu plano</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FormProvider {...methods}>
            <PaymentForm
              onSubmit={methods.handleSubmit(onSubmit)}
              isProcessing={isProcessing}
              setSelectedPlan={setSelectedPlan}
            />
          </FormProvider>
          <PaymentSummary selectedPlan={selectedPlan} />
        </div>
      </div>
    </div>
  );
}
