import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllPlans } from "@/hooks/tanstack-query/plan/useGetAllPlans";
import { useSelectDisable } from "@/hooks/useSelectDisable";
import { useSelectPlaceholder } from "@/hooks/useSelectPlaceholder";
import { Label } from "@radix-ui/react-label";
import { FieldErrors, FieldValues } from "react-hook-form";

interface SelectPlanProps {
  errors: FieldErrors<FieldValues>;
  onValueChange: (value: string) => void;
}

export default function SelectPlan({ errors, onValueChange }: SelectPlanProps) {
  const { data: plans, isLoading, error } = useGetAllPlans();
  const selectPlanPlaceholder = useSelectPlaceholder({ data: plans, isLoading, error });

  return (
    <div className="space-y-2">
      <Label htmlFor="plan">
        Plano <span className="text-destructive">*</span>
      </Label>
      <Select onValueChange={onValueChange} disabled={useSelectDisable({ isLoading, error })}>
        <SelectTrigger id="plan">
          <SelectValue placeholder={selectPlanPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          {plans?.map((plan) => (
            <SelectItem key={plan.nivel} value={plan.nivel}>
              Plano {plan.nivel.toLowerCase()} - R$ {plan.valor}/mês
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors.plan && <p className="text-sm text-destructive">{errors.plan.message as string}</p>}
    </div>
  );
}
