import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Loader2, Lock } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { formatCPF, formatCardNumber, formatExpiryDate } from "../formatters";
import SelectPlan from "./SelectPlan";

interface PaymentFormProps {
  onSubmit: (data: unknown) => void;
  isProcessing: boolean;
}

export function PaymentForm({ onSubmit, isProcessing }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

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
          <SelectPlan errors={errors} />

          {/* Dados Pessoais */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input id="name" {...register("name")} placeholder="João da Silva" maxLength={100} />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message as string}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input id="email" type="email" {...register("email")} placeholder="joao@email.com" maxLength={255} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message as string}</p>}
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
                      e.target.value = formatCPF(e.target.value);
                    }}
                  />
                  {errors.cpf && <p className="text-sm text-destructive">{errors.cpf.message as string}</p>}
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
                    e.target.value = formatCardNumber(e.target.value);
                  }}
                />
                {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber.message as string}</p>}
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
                {errors.cardName && <p className="text-sm text-destructive">{errors.cardName.message as string}</p>}
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
                      e.target.value = formatExpiryDate(e.target.value);
                    }}
                  />
                  {errors.expiryDate && (
                    <p className="text-sm text-destructive">{errors.expiryDate.message as string}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">
                    CVV <span className="text-destructive">*</span>
                  </Label>
                  <Input id="cvv" {...register("cvv")} placeholder="123" maxLength={4} type="password" />
                  {errors.cvv && <p className="text-sm text-destructive">{errors.cvv.message as string}</p>}
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full shadow-button" disabled={isProcessing}>
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processando Pagamento...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" /> Confirmar Pagamento
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
  );
}
