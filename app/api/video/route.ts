import { NextResponse } from "next/server";
import Replicate from "replicate";
import { auth } from "@clerk/nextjs";

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

    // Executa o modelo ZeroScope V2 XL no Replicate com o prompt fornecido
    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
          input: {
              prompt,
          }
      }
  );
    
    // Retorna a resposta do modelo como JSON
    return NextResponse.json(response);  
    } catch (error) {
      // Registra o erro no console
      console.error("[VIDEO_ERROR]", error);
  
      // Retorn}a uma resposta de erro com mais detalhes
      return new NextResponse("Ocorreu um erro ao processar o vídeo. Por favor, tente novamente mais tarde.", { status: 500 });
    }
};