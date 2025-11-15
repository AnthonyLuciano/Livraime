import { Phone } from "@/types/user.types";

/**
 * Formata um valor de string para o formato de CPF (000.000.000-00).
 * @param value A string a ser formatada.
 * @returns A string formatada como CPF.
 */
export const formatCPF = (value: string): string => {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígitos novamente (para o segundo bloco)
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2") // Coloca um hífen entre o terceiro e o quarto dígitos
    .slice(0, 14); // Limita ao tamanho máximo do CPF formatado
};

/**
 * Extrai o DDD (areaCode) e o número (number) de uma string de telefone.
 * Aceita qualquer formato e limpa automaticamente caracteres não numéricos.
 *
 * @param value String com um telefone (ex: "(11) 98888-7777").
 * @returns Objeto { areaCode: string, number: string }
 */
export const extractPhone = (value: string): Phone => {
  const digits = value.replace(/\D/g, ""); // mantém só os números

  // Se não houver números suficientes, retorna vazio
  if (digits.length < 3) {
    return { areaCode: "", number: "" };
  }

  const areaCode = digits.substring(0, 2);
  const number = digits.substring(2); // resto

  return { areaCode, number };
};

export const formatCardNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  return numbers.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

export const formatExpiryDate = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length >= 2) {
    return numbers.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  }
  return numbers;
};
