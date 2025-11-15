import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterFormData } from "@/pages/access/register/register.schema";
import { formatCPF } from "@/pages/payment/formatters";
import { ChangeEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface RegisterPersonalDataProps {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
}

export default function InputCPF({ register, errors }: RegisterPersonalDataProps) {
  const { onChange, ...rest } = register("cpf");

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCPF(e.target.value);
    onChange(e);
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="cpf">
        CPF <span className="text-destructive">*</span>
      </Label>
      <Input id="cpf" {...rest} placeholder="000.000.000-00" maxLength={14} onChange={onInputChange} />
      {errors.cpf && <p className="text-sm text-destructive">{errors.cpf.message}</p>}
    </div>
  );
}
