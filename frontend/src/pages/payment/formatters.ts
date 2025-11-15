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
 * Formata um valor de string para o formato de telefone (XX) XXXXX-XXXX.
 * @param value A string a ser formatada.
 * @returns A string formatada como telefone.
 */
export const formatPhone = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, "");

  if (digitsOnly.length <= 10) {
    return digitsOnly
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 14); // (XX) XXXX-XXXX
  }
  return digitsOnly.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3").slice(0, 15); // (XX) XXXXX-XXXX
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
