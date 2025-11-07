export const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
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
