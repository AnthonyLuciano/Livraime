import { AuthContext } from "@/contexts/AuthContext";
import { useLinkUserToPlan } from "@/hooks/tanstack-query/user/useLinkUserToPlan";
import { toast } from "@/hooks/use-toast";
import { PaymentSummary } from "@/pages/payment/PaymentSummary";
import { PlanFromAPI } from "@/types/plan.types";
import { LinkUserToPlan } from "@/types/user.types";
import { PaymentFormData, paymentSchema } from "@/types/validators/payment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PaymentForm } from "./form/PaymentForm";
import { PaymentSuccess } from "./PaymentSuccess";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<PlanFromAPI | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { user, isLoading } = useContext(AuthContext);
  const hasUser = !!user;

  const { mutate: linkUserToPlan, isPending: isProcessing } = useLinkUserToPlan();

  const methods = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormData) => {
    linkUserToPlan(createLinkDto(user.cpf, data), {
      onSuccess: () => {
        setPaymentSuccess(true);

        toast({
          title: "Pagamento confirmado!",
          description: `Plano "${data.plan.nivel.toLowerCase()}" ativado com sucesso.`,
        });

        // Redirecionar após 3 segundos
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      },

      onError: (error) => {
        // console.error("Erro ao vincular usuário a plano:", error);
        toast({
          title: "Erro ao vincular usuário a plano",
          description: axios.isAxiosError(error) ? error.response.data : error.message,
        });
      },
    });
  };

  useEffect(() => {
    if (!isLoading && !hasUser) {
      navigate("/login", { replace: true });
      toast({
        title: "Redirecionado para página de login",
        description: "É necessário efetuar login para acessar essa página.",
        duration: 5000,
      });
    }
  }, [isLoading, hasUser, navigate]);

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

function createLinkDto(userCPF: string, data: PaymentFormData): LinkUserToPlan {
  return {
    cpf: userCPF,
    Plano: data.plan.nivel,
  };
}
