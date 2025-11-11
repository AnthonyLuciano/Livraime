import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCardNumber, formatExpiryDate } from "@/pages/payment/formatters";
import { PaymentFormData } from "@/types/validators/payment.schema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface CardDataProps {
  errors: FieldErrors<PaymentFormData>;
  register: UseFormRegister<PaymentFormData>;
}

export default function CardData({ register, errors }: CardDataProps) {
  return (
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
            {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate.message as string}</p>}
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
  );
}
