export interface Beneficiados {
  beneficiados: Beneficiado[];
}

export interface Beneficiado {
  beneficiaryData: BeneficiaryData;
  lastBook: string;
  message: string;
  progress: string;
}

export interface BeneficiaryData {
  name: string;
  age: number;
  locale: string;
}
