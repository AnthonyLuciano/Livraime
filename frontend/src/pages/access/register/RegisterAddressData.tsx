import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterFormData } from "@/pages/access/register/register.schema";
import { formatCEP } from "@/pages/payment/formatters";
import { ChangeEvent } from "react";
import { FieldErrors, useFormContext } from "react-hook-form";

interface RegisterAddressDataProps {
  errors: FieldErrors<RegisterFormData>;
}

export function RegisterAddressData({ errors }: RegisterAddressDataProps) {
  const { register } = useFormContext<RegisterFormData>();

  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-lg font-semibold border-b pb-2">Endereço</h3>
      <div className="space-y-2">
        <Label htmlFor="endereco.zipCode">
          CEP <span className="text-destructive">*</span>
        </Label>
        <Input
          id="endereco.zipCode"
          {...register("endereco.zipCode", {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = formatCEP(e.target.value);
            },
          })}
          placeholder="00000-000"
          maxLength={9}
        />
        {errors.endereco?.zipCode && <p className="text-sm text-destructive">{errors.endereco.zipCode.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="endereco.street">
          Logradouro <span className="text-destructive">*</span>
        </Label>
        <Input id="endereco.street" {...register("endereco.street")} placeholder="Rua, Avenida, etc." />
        {errors.endereco?.street && <p className="text-sm text-destructive">{errors.endereco.street.message}</p>}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2 md:col-span-1">
          <Label htmlFor="endereco.number">
            Número <span className="text-destructive">*</span>
          </Label>
          <Input id="endereco.number" {...register("endereco.number")} placeholder="123" />
          {errors.endereco?.number && <p className="text-sm text-destructive">{errors.endereco.number.message}</p>}
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="endereco.complement">Complemento</Label>
          <Input id="endereco.complement" {...register("endereco.complement")} placeholder="Apto, Bloco, Casa" />
          {errors.endereco?.complement && (
            <p className="text-sm text-destructive">{errors.endereco.complement.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="endereco.neighborhood">
            Bairro <span className="text-destructive">*</span>
          </Label>
          <Input id="endereco.neighborhood" {...register("endereco.neighborhood")} placeholder="Seu bairro" />
          {errors.endereco?.neighborhood && (
            <p className="text-sm text-destructive">{errors.endereco.neighborhood.message}</p>
          )}
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="endereco.city">
            Cidade <span className="text-destructive">*</span>
          </Label>
          <Input id="endereco.city" {...register("endereco.city")} placeholder="Sua cidade" />
          {errors.endereco?.city && <p className="text-sm text-destructive">{errors.endereco.city.message}</p>}
        </div>
        <div className="space-y-2 md:col-span-1">
          <Label htmlFor="endereco.state">
            Estado <span className="text-destructive">*</span>
          </Label>
          <Input id="endereco.state" {...register("endereco.state")} placeholder="UF" maxLength={2} />
          {errors.endereco?.state && <p className="text-sm text-destructive">{errors.endereco.state.message}</p>}
        </div>
      </div>
    </div>
  );
}
