import * as z from "zod";

// Define o schema para a validação do formulário de geração de imagens
export const formSchema = z.object({
  // O campo 'prompt' é obrigatório e deve ser uma string com pelo menos 1 caractere
  prompt: z.string().min(1, {
    // Mensagem de erro personalizada para o campo 'prompt'
    message: "Image Prompt is required"
  }),
  // O campo 'amount' é obrigatório e deve ser uma string com pelo menos 1 caractere
  amount: z.string().min(1),
  // O campo 'resolution' é obrigatório e deve ser uma string com pelo menos 1 caractere
  resolution: z.string().min(1)
});

// Define as opções para a quantidade de imagens
export const amountOptions = [
  {
    value: "1",
    label: "1 Photo"
  },
  {
    value: "2",
    label: "2 Photos"
  },
  {
    value: "3",
    label: "3 Photos"
  },
  {
    value: "4",
    label: "4 Photos"
  },
  {
    value: "5",
    label: "5 Photos"
  }
];

// Define as opções para a resolução das imagens
export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256"
  },
  {
    value: "512x512",
    label: "512x512"
  },
  {
    value: "1024x1024",
    label: "1024x1024"
  }
];