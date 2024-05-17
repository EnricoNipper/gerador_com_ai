import * as z from "zod";

// Define o schema para a validação do formulário
export const formSchema = z.object({
  // O campo 'prompt' é obrigatório e deve ser uma string com pelo menos 1 caractere
  prompt: z.string().min(1, {
    // Mensagem de erro personalizada para o campo 'prompt'
    message: "Prompt is required"
  })
});