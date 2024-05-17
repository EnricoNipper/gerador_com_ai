import { NextResponse } from "next/server";
import Replicate from "replicate";

// Cria uma nova instância do cliente Replicate com a chave de API.
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
});

// Função de manipulador de requisições POST
export async function POST(req: Request) {
  try {
    // Obtém o corpo da requisição como JSON
    const body = await req.json();

    // Extrai o prompt do corpo da requisição
    const { prompt } = body;

    // Verifica se o prompt foi fornecido
    if (!prompt) return new NextResponse("Prompt is Required", { status: 400 });

    // Executa o modelo Riffusion no Replicate com o prompt fornecido
    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt
        }
      }
    );

    // Retorna a resposta do modelo como JSON
    return NextResponse.json(response);
  } catch (error) {
    // Registra o erro no console
    console.error("[MUSIC_ERROR]", error);

    // Retorna uma resposta de erro interno
    return new NextResponse("Internal Error", { status: 500 });
  }
}
