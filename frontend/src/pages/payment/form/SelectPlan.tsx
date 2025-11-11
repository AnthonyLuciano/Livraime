import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllPlans } from "@/hooks/tanstack-query/plan/useGetAllPlans";
import { useSelectDisable } from "@/hooks/useSelectDisable";
import { useSelectPlaceholder } from "@/hooks/useSelectPlaceholder";
import { PlanFromAPI } from "@/types/plan.types";
import { PaymentFormData } from "@/types/validators/payment.schema";
import { FieldErrors, FieldValues, UseFormSetValue } from "react-hook-form";

interface SelectPlanProps {
  setFormValue: UseFormSetValue<PaymentFormData>;
  errors: FieldErrors<FieldValues>;
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanFromAPI>>;
}

export default function SelectPlan({ errors, setFormValue, setSelectedPlan }: SelectPlanProps) {
  const { data: plans, isLoading, error } = useGetAllPlans();
  const selectPlanPlaceholder = useSelectPlaceholder({ data: plans, isLoading, error });

  function onSelectPlan(level: string) {
    const plan = plans.find((p) => p.nivel === level);
    if (!plan) return;

    const normalizedPlan = {
      ...plan,
      nivel: plan.nivel.toUpperCase().trim() as "BASICO" | "INTERMEDIARIO" | "PREMIUM",
    };

    setSelectedPlan(normalizedPlan);
    setFormValue("plan", normalizedPlan, { shouldValidate: true });
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="plan">
        Plano <span className="text-destructive">*</span>
      </Label>
      <Select onValueChange={onSelectPlan} disabled={useSelectDisable({ isLoading, error })}>
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
