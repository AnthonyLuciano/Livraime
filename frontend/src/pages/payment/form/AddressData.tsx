import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentFormData } from "@/types/validators/payment.schema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface AddressDataProps {
  errors: FieldErrors<PaymentFormData>;
  register: UseFormRegister<PaymentFormData>;
}

export default function AddressData({ register, errors }: AddressDataProps) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold mb-4">Endereço</h3>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="address.zipCode">
            CEP <span className="text-destructive">*</span>
          </Label>
          <Input id="address.zipCode" {...register("address.zipCode")} placeholder="00000-000" maxLength={9} />
          {errors.address?.zipCode && (
            <p className="text-sm text-destructive">{errors.address.zipCode.message as string}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address.street">
            Logradouro <span className="text-destructive">*</span>
          </Label>
          <Input id="address.street" {...register("address.street")} placeholder="Rua das Flores" maxLength={255} />
          {errors.address?.street && (
            <p className="text-sm text-destructive">{errors.address.street.message as string}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="address.number">
              Número <span className="text-destructive">*</span>
            </Label>
            <Input id="address.number" {...register("address.number")} placeholder="123" maxLength={10} />
            {errors.address?.number && (
              <p className="text-sm text-destructive">{errors.address.number.message as string}</p>
            )}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address.complement">Complemento</Label>
            <Input
              id="address.complement"
              {...register("address.complement")}
              placeholder="Apto 4, Bloco B"
              maxLength={100}
            />
            {errors.address?.complement && (
              <p className="text-sm text-destructive">{errors.address.complement.message as string}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address.neighborhood">
              Bairro <span className="text-destructive">*</span>
            </Label>
            <Input
              id="address.neighborhood"
              {...register("address.neighborhood")}
              placeholder="Centro"
              maxLength={100}
            />
            {errors.address?.neighborhood && (
              <p className="text-sm text-destructive">{errors.address.neighborhood.message as string}</p>
            )}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address.city">
              Cidade <span className="text-destructive">*</span>
            </Label>
            <Input id="address.city" {...register("address.city")} placeholder="São Paulo" maxLength={100} />
            {errors.address?.city && (
              <p className="text-sm text-destructive">{errors.address.city.message as string}</p>
            )}
          </div>
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="address.state">
              Estado <span className="text-destructive">*</span>
            </Label>
            <Input id="address.state" {...register("address.state")} placeholder="SP" maxLength={2} />
            {errors.address?.state && (
              <p className="text-sm text-destructive">{errors.address.state.message as string}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
