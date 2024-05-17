
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

//import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

// Cria uma nova configuração da API OpenAI com a chave da API do ambiente
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

// Cria uma nova instância da API OpenAI com a configuração criada
const openai = new OpenAIApi(configuration);

// Define a função de tratamento para requisições POST
export async function POST( req: Request
) {
  try {
    // Obtém o corpo da requisição e extrai as mensagens
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;


  if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
  }

  if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
  }
  if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
  }
  if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
  }
  const response = await openai.createImage({
    prompt,
    n: parseInt(amount, 10),
    size:resolution
 });

 return NextResponse.json(response.data.data);
} catch (error) {
 console.log('[IMAGE_ERROR]', error);
 return new NextResponse("Internal Error", { status: 500 });
}
};
