"use client";

import React, { useState } from "react";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { formSchema } from "./constants";

// Componente para a página de geração de música
export default function MusicPage() {
 
  // Inicializa o roteador para navegação na página
  const router = useRouter();
  // Define o estado da música gerada
  const [music, setMusic] = useState<string>();

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
      // Limpa a música gerada antes de gerar nova
      setMusic(undefined);

      // Faz uma requisição POST para a API de música, enviando os valores do formulário
      const response = await axios.post("/api/music", values);

      // Define a música gerada no estado
      setMusic(response.data.audio);
      // Limpa o formulário após o envio
      form.reset();
    } finally {
      // Recarrega o roteador para atualizar o estado da página
      router.refresh();
    }
  };

  // Renderiza o componente MusicPage
  return (
    <div>
      {/* Renderiza o componente Heading com informações sobre a página */}
      <Heading
        title="Music Generation"
        description="Turn your prompt to music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="Piano solo"
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
        {/* Renderiza a seção de exibição da música gerada */}
        <div className="space-y-4 mt-4">
          {/* Mostra um Loader se o formulário estiver sendo enviado */}
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {/* Mostra uma mensagem de "Empty" se não houver música gerada */}
          {!music && !isLoading && <Empty label="No Music Generated." />}
          {/* Renderiza o player de áudio se a música estiver definida */}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}