import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function sliceWalletAddress(address: string, first: number, last: number) {
  if (!address) return "";
  return `${address.slice(0, first)}...${address.slice(-last)}`;
}