import { type ClassValue, clsx } from "clsx"; // Importa o tipo ClassValue e a função clsx da biblioteca clsx
import { twMerge } from "tailwind-merge"; // Importa a função twMerge da biblioteca tailwind-merge

// Define a função cn que recebe um número variável de argumentos do tipo ClassValue
export function cn(...inputs: ClassValue[]) {
  // Retorna o resultado de aplicar a função twMerge à saída da função clsx aplicada aos argumentos
  return twMerge(clsx(inputs)); 
}