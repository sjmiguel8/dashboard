import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getProducts(search: string, offset: number): Promise<{ products: any[], newOffset: number, totalProducts: number }> {
  // function implementation
  return {
    products: [], // replace with actual products
    newOffset: 0, // replace with actual new offset
    totalProducts: 0 // replace with actual total products
  };
}