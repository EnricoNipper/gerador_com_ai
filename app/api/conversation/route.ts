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
export async function POST(req: Request) {
  try {
    // Obtém o corpo da requisição e extrai as mensagens
    const body = await req.json();
    const { messages } = body;


    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
  }

    // Verifica se as mensagens foram fornecidas na requisição
    if (!messages)
      return new NextResponse("Messages Are Required", { status: 400 });

    // Realiza a chamada à API OpenAI para gerar a resposta do chatbot
    const response = await openai.createChatCompletion({
      // Utiliza o modelo GPT-3.5-turbo
      model: "gpt-3.5-turbo",
      // Fornece as mensagens para o modelo
      messages
    });

   
    // Retorna a resposta do chatbot para o cliente
    return NextResponse.json(response.data.choices[0].message);

  // Captura qualquer erro que possa ocorrer durante o processo
  } catch (error) {
    // Registra o erro no console
    console.error("[CONVERSATION_ERROR]", error);
    // Retorna uma resposta de erro ao cliente
    return new NextResponse("Internal Error", { status: 500 });
  }
}