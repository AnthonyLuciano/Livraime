export interface PlanFromAPI {
  nivel: string;
  valor: number;
  beneficios: Beneficio[];
}

export interface Beneficio {
  nome: string;
  descricao: string;
}
