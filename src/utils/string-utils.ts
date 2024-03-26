export function to1BasedIdx(idx: number): number {
  return idx + 1;
}

export function to0BasedIdx(idx: number): number {
  return idx - 1;
}

export function priceText(isYearly: boolean, price: number): string {
  return isYearly ? `$${price}/year` : `$${price}/month`;
}
