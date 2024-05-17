import * as z from "zod";

// Define o schema para a validação do formulário
export const formSchema = z.object({
  // O campo 'prompt' é obrigatório e deve ser uma string com pelo menos 1 caractere
  prompt: z.string()
    .min(1, {
      // Mensagem de erro personalizada para o campo 'prompt'
      message: "Por favor, insira um prompt para gerar o vídeo."
    })
    // Validação adicional: verifica se o prompt contém caracteres especiais
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: "O prompt não pode conter caracteres especiais."
    })
    // Validação adicional: limita o tamanho do prompt
    .max(100, {
      message: "O prompt deve ter no máximo 100 caracteres."
    })
});