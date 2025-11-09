import { PlanFromAPI } from "@/types/plan.types";
import { useEffect, useState } from "react";

interface SelectPlaceholderProps {
  isLoading: boolean;
  error: Error;
  data: PlanFromAPI[];
}

export function useSelectPlaceholder({ data, isLoading, error }: SelectPlaceholderProps) {
  const [selectPlaceholder, setSelectPlaceholder] = useState<string>("");

  useEffect(() => {
    if (isLoading) setSelectPlaceholder("Carregando itens...");
    else if (error) setSelectPlaceholder("Erro ao carregar itens");
    else if (!data.length) setSelectPlaceholder("Nenhum item encontrado");
    else setSelectPlaceholder("Selecione um item");
  }, [data, isLoading, error]);

  return selectPlaceholder;
}
