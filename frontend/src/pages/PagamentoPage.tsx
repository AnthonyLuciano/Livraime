import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const paymentSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  cpf: z.string().trim().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (formato: 000.000.000-00)"),
  cardNumber: z.string().trim().regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Número do cartão inválido (formato: 0000 0000 0000 0000)"),
  cardName: z.string().trim().min(3, "Nome no cartão deve ter no mínimo 3 caracteres").max(100),
  expiryDate: z.string().trim().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Data inválida (formato: MM/AA)"),
  cvv: z.string().trim().regex(/^\d{3,4}$/, "CVV inválido (3 ou 4 dígitos)"),
  plan: z.enum(["basico", "familia", "transformador"], { required_error: "Selecione um plano" }),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

const plans = {
  basico: { name: "Plano Básico", price: "R$ 15" },
  familia: { name: "Plano Familia", price: "R$ 35" },
  transformador: {name: "Plano Transformador", price: "R$ 60,00"}
};

export default function PagamentoPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const selectedPlan = watch("plan");

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }
    return numbers;
  };

  const onSubmit = async (data: PaymentFormData) => {
    setIsProcessing(true);

    // Simular processamento de pagamento
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsProcessing(false);
    setPaymentSuccess(true);

    toast({
      title: "Pagamento confirmado!",
      description: `Assinatura ${plans[data.plan].name} ativada com sucesso.`,
    });

    // Redirecionar após 3 segundos
    setTimeout(() => {
      navigate("/assinante");
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-soft animate-fade-in">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Pagamento Confirmado!</h2>
            <p className="text-muted-foreground mb-6">
              Sua assinatura foi ativada com sucesso. Você será redirecionado em instantes...
            </p>
            <Button onClick={() => navigate("/assinante")} className="shadow-button">
              Ir para Área do Assinante
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Finalizar Assinatura</h1>
          <p className="text-muted-foreground">Complete suas informações para ativar seu plano</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Formulário */}
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
                {/* Plano */}
                <div className="space-y-2">
                  <Label htmlFor="plan">
                    Plano <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue("plan", value as "basico" | "familia" | "transformador")}>
                    <SelectTrigger id="plan">
                      <SelectValue placeholder="Selecione um plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basico">Plano Básico - R$ 15,00/mês</SelectItem>
                      <SelectItem value="familia">Plano familia - R$ 35,00/mês</SelectItem>
                      <SelectItem value="transformador">Plano Transformador - R$ 60,00/mês</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.plan && <p className="text-sm text-destructive">{errors.plan.message}</p>}
                </div>

                {/* Dados Pessoais */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="João da Silva"
                        maxLength={100}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="joao@email.com"
                          maxLength={255}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cpf">
                          CPF <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cpf"
                          {...register("cpf")}
                          placeholder="000.000.000-00"
                          maxLength={14}
                          onChange={(e) => {
                            const formatted = formatCPF(e.target.value);
                            e.target.value = formatted;
                          }}
                        />
                        {errors.cpf && <p className="text-sm text-destructive">{errors.cpf.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dados do Cartão */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Dados do Cartão</h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">
                        Número do Cartão <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardNumber"
                        {...register("cardNumber")}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        onChange={(e) => {
                          const formatted = formatCardNumber(e.target.value);
                          e.target.value = formatted;
                        }}
                      />
                      {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">
                        Nome no Cartão <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="cardName"
                        {...register("cardName")}
                        placeholder="JOÃO DA SILVA"
                        maxLength={100}
                        style={{ textTransform: "uppercase" }}
                      />
                      {errors.cardName && <p className="text-sm text-destructive">{errors.cardName.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">
                          Validade <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="expiryDate"
                          {...register("expiryDate")}
                          placeholder="MM/AA"
                          maxLength={5}
                          onChange={(e) => {
                            const formatted = formatExpiryDate(e.target.value);
                            e.target.value = formatted;
                          }}
                        />
                        {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">
                          CVV <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cvv"
                          {...register("cvv")}
                          placeholder="123"
                          maxLength={4}
                          type="password"
                        />
                        {errors.cvv && <p className="text-sm text-destructive">{errors.cvv.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full shadow-button" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processando Pagamento...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Confirmar Pagamento
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Pagamento seguro e criptografado
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Resumo */}
          <Card className="shadow-card animate-slide-up h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedPlan ? (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Plano:</span>
                      <span className="font-medium">{plans[selectedPlan].name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Período:</span>
                      <span className="font-medium">Mensal</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-primary">{plans[selectedPlan].price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Cobrado mensalmente</p>
                  </div>

                  <div className="bg-accent p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold text-sm text-accent-foreground">Incluído no plano:</h4>
                    <ul className="text-xs text-accent-foreground space-y-1">
                      {selectedPlan === "basico" ? (
                        <>
                          <li>✓ 1 livro usado por mês</li>
                          <li>✓ Conexão com 1 beneficiário</li>
                          <li>✓ Relatório mensal de impacto</li>
                          <li>✓ Suporte via email</li>
                        </>
                      ) : selectedPlan === "familia" ? (
                        <>
                          <li>✓ 3 livros usados por mês</li>
                          <li>✓ Conexão com 3 beneficiários</li>
                          <li>✓ Brindes educativos trimestrais</li>
                          <li>✓ Relatórios detalhados</li>
                          <li>✓ Suporte prioritário</li>
                        </>
                      ) : (
                          // Plano transformador
                        <>
                          <li>✓ 5 livros usados por mês</li>
                          <li>✓ Conexão com 5 beneficiários</li>
                          <li>✓ Kit pedagógico trimestral</li>
                          <li>✓ Relatórios personalizados</li>
                          <li>✓ Suporte VIP</li>
                        </>
                      )}
                      </ul>
                      </div>
                      </>
                  ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Selecione um plano para ver o resumo
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
