import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputCPF from "@/pages/access/register/personal-data/InputCPF";
import { RegisterFormData } from "@/pages/access/register/register.schema";
import { formatPhone } from "@/pages/payment/formatters";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldErrors, useFormContext } from "react-hook-form";

interface RegisterPersonalDataProps {
  errors: FieldErrors<RegisterFormData>;
}

export function RegisterPersonalData({ errors }: RegisterPersonalDataProps) {
  const { register } = useFormContext<RegisterFormData>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Dados Pessoais</h3>
      <div className="space-y-2">
        <Label htmlFor="nome">
          Nome Completo <span className="text-destructive">*</span>
        </Label>
        <Input id="nome" {...register("nome")} placeholder="Seu nome completo" />
        {errors.nome && <p className="text-sm text-destructive">{errors.nome.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            E-mail <span className="text-destructive">*</span>
          </Label>
          <Input id="email" type="email" {...register("email")} placeholder="seu@email.com" />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <InputCPF register={register} errors={errors} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="telefone">
            Telefone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="telefone"
            {...register("telefone", {
              onChange: (e) => {
                e.target.value = formatPhone(e.target.value);
              },
            })}
            placeholder="(99) 99999-9999"
            maxLength={15}
          />
          {errors.telefone && <p className="text-sm text-destructive">{errors.telefone.message}</p>}
        </div>
        <div className="space-y-2 relative">
          <Label htmlFor="senha">
            Senha <span className="text-destructive">*</span>
          </Label>
          <Input id="senha" type={showPassword ? "text" : "password"} {...register("senha")} placeholder="••••••••" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-11 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          {errors.senha && <p className="text-sm text-destructive">{errors.senha.message}</p>}
        </div>
      </div>
    </div>
  );
}
