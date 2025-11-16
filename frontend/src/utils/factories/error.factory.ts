import axios from "axios";

export function createErrorMessage(error: unknown): string {
  const fallbackDescription = "Erro desconhecido.";
  return axios.isAxiosError(error)
    ? typeof error.response.data === "string"
      ? error.response.data || fallbackDescription
      : JSON.stringify(error.response.data, null, 2)
    : error instanceof Error
    ? error.message || fallbackDescription
    : fallbackDescription;
}
