
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

// Cria uma nova instância da configuração do OpenAI
const configuration = new Configuration({
  // Define a chave de API do OpenAI
  apiKey: process.env.OPENAI_API_KEY
});

// Cria uma nova instância da API do OpenAI
const openai = new OpenAIApi(configuration);

// Define a mensagem de instrução para o modelo de linguagem
const insructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "Você é um gerador de código. Você deve responder apenas em código Markdown. Use comentários para explicações."
};

// Define a função para lidar com requisições POST
export async function POST(req: Request) {
  try {
    // Lê o corpo da requisição
    const body = await req.json();
    // Obtém as mensagens do corpo da requisição
    const { messages } = body;

    // Verifica se a chave de API do OpenAI foi configurada
    if (!configuration.apiKey)
      return new NextResponse("OpenAI API Key Not Configured", { status: 500 });

    // Faz uma requisição para o modelo de linguagem
    const response = await openai.createChatCompletion({
      // Define o modelo de linguagem a ser usado
      model: "gpt-3.5-turbo",
      // Define as mensagens a serem enviadas para o modelo
      messages: [insructionMessage, ...messages]
    });

    // Retorna a resposta do modelo de linguagem
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    // Em caso de erro, registra o erro no console e retorna uma resposta de erro
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}