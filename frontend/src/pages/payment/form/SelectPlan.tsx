import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { FieldErrors, FieldValues } from "react-hook-form";

interface SelectPlanProps {
  errors: FieldErrors<FieldValues>;
  onValueChange: (value: string) => void;
}

export default function SelectPlan({ errors, onValueChange }: SelectPlanProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="plan">
        Plano <span className="text-destructive">*</span>
      </Label>
      <Select onValueChange={onValueChange}>
        <SelectTrigger id="plan">
          <SelectValue placeholder="Selecione um plano" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="basico">Plano Básico - R$ 15,00/mês</SelectItem>
          <SelectItem value="familia">Plano Familia - R$ 35,00/mês</SelectItem>
          <SelectItem value="transformador">Plano Transformador - R$ 60,00/mês</SelectItem>
        </SelectContent>
      </Select>
      {errors.plan && <p className="text-sm text-destructive">{errors.plan.message as string}</p>}
    </div>
  );
}
