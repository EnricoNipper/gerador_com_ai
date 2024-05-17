"use client";

import React, { useState } from "react";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import ReactMarkdown from "react-markdown";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

import { cn } from "@/lib/utils";

import { formSchema } from "./constants";

// Componente para a página de geração de código
export default function CodePage() {
  
  // Inicializa o roteador para navegação na página
  const router = useRouter();
  // Define o estado das mensagens da conversa
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  // Cria um formulário usando o hook useForm do react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    // Utiliza o resolvedor zod para validar o formulário com base no schema definido
    resolver: zodResolver(formSchema),
    // Define os valores padrão do formulário
    defaultValues: {
      prompt: ""
    }
  });

  // Verifica se o formulário está em estado de envio
  const isLoading = form.formState.isSubmitting;

  // Função para lidar com o envio do formulário
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Cria uma mensagem de usuário com o prompt do formulário
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      };
      // Adiciona a nova mensagem de usuário à lista de mensagens
      const newMessages = [...messages, userMessage];

      // Faz uma requisição POST para a API de código, enviando as mensagens
      const response = await axios.post("/api/code", {
        messages: newMessages
      });

      // Atualiza o estado das mensagens com as respostas da API
      setMessages((current) => [...current, userMessage, response.data]);

      // Limpa o formulário após o envio
      form.reset();
    } 
    finally {
      // Recarrega o roteador para atualizar o estado da página
      router.refresh();
    }
  };

  // Renderiza o componente CodePage
  return (
    <div>
      {/* Renderiza o componente Heading com informações sobre a página */}
      <Heading
        title="Code Generaion"
        description="Generate Code using Descriptive Text"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          {/* Renderiza o componente Form do react-hook-form */}
          <Form {...form}>
            <form
              // Envia o formulário ao clicar no botão "Generate"
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              {/* Renderiza o campo 'prompt' do formulário */}
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      {/* Renderiza o componente Input */}
                      <Input
                        // Desabilita o input se o formulário estiver sendo enviado
                        disabled={isLoading}
                        placeholder="Simple toggle button using react hooks."
                        className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
                        // Passa as propriedades do field para o Input
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Renderiza o botão "Generate" */}
              <Button
                // Desabilita o botão se o formulário estiver sendo enviado
                disabled={isLoading}
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {/* Renderiza a seção de mensagens da conversa */}
        <div className="space-y-4 mt-4">
          {/* Mostra um Loader se o formulário estiver sendo enviado */}
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {/* Mostra uma mensagem de "Empty" se não houver mensagens */}
          {messages.length === 0 && !isLoading && (
            <Empty label="No Code Generated Yet" />
          )}
          {/* Renderiza a lista de mensagens */}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                // Define a chave para cada mensagem
                key={message.content}
                // Define o estilo das mensagens
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  // Define o estilo da mensagem de usuário
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    // Define o estilo da mensagem do bot
                    : "bg-muted"
                )}
              >
                {/* Renderiza o avatar do usuário ou do bot */}
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                {/* Renderiza o conteúdo da mensagem usando o ReactMarkdown */}
                <ReactMarkdown
                  // Define os componentes personalizados para código e pré-formatação
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    )
                  }}
                  // Define o estilo do conteúdo da mensagem
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}