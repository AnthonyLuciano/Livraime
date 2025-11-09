interface SelectDisableProps {
  isLoading: boolean;
  error: Error;
}

export function useSelectDisable({ isLoading, error }: SelectDisableProps): boolean {
  return isLoading || !!error;
}
