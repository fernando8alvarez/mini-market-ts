import type { Product } from "../types.js";

export function getTopCheapestAvailable(
  products: Product[],
  top: number = 3
): Product[] {
  return products
    .filter((p) => p.isAvailable)
    .sort((a, b) => a.price - b.price)
    .slice(0, top);
}
