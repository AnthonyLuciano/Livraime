import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCPF, formatPhone } from "@/pages/payment/formatters";
import { PaymentFormData } from "@/types/validators/payment.schema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PersonalDataProps {
  errors: FieldErrors<PaymentFormData>;
  register: UseFormRegister<PaymentFormData>;
}

export default function PersonalData({ register, errors }: PersonalDataProps) {
  return (
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
            <Label htmlFor="password">
              Senha <span className="text-destructive">*</span>
            </Label>
            <Input id="password" type="password" {...register("password")} placeholder="••••••••" />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message as string}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cpf">
              CPF <span className="text-destructive">*</span>
            </Label>
            <Input
              id="cpf"
              {...register("cpf")}
              placeholder="000.000.000-00"
              maxLength={14}
              onChange={(e) => (e.target.value = formatCPF(e.target.value))}
            />
            {errors.cpf && <p className="text-sm text-destructive">{errors.cpf.message as string}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">
              Telefone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="(99) 99999-9999"
              maxLength={15}
              onChange={(e) => (e.target.value = formatPhone(e.target.value))}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone.message as string}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
