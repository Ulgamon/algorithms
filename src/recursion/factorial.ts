export const factorial: any = (n: number) => {
  if (n < 0) return false;
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};
