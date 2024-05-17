"use client";

import React, {useState} from "react";
import { VideoIcon } from "lucide-react";
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

// Componente para a página de geração de vídeos
const VideoPage = () => {
  // Inicializa o roteador para navegação na páginaF
  const router = useRouter();
  // Define o estado do vídeo gerado
  const [video, setVideo] = useState<string>();

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
      // Limpa o vídeo gerado antes de gerar novo
      setVideo(undefined);

      // Faz uma requisição POST para a API de vídeo, enviando os valores do formulário
      const response = await axios.post("/api/video", values);

      // Define o vídeo gerado no estado
      setVideo(response.data[0]);
      // Limpa o formulário após o envio
      form.reset();
    } finally {
      // Recarrega o roteador para atualizar o estado da página
      router.refresh();
    }
  };

  // Renderiza o componente VideoPage
  return (
    <div>
      {/* Renderiza o componente Heading com informações sobre a página */}
      <Heading
        title="Video Generation"
        description="Turn your prompt to video."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
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
                render={( {field} ) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      {/* Renderiza o componente Input */}
                      <Input
                        // Desabilita o input se o formulário estiver sendo enviado
                        disabled={isLoading}
                        placeholder="Clown fish swimming around a coral reef"
                        className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
                        // Passa as propriedades do field para o Input
                        {...field}
                      />
                    </FormControl>
                    {form.formState?.errors?.prompt && (
                      <span className="text-red-500 text-sm mt-1">
                        {form.formState.errors.prompt.message}
                      </span>
                    )}
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
        {/* Renderiza a seção de exibição do vídeo gerado */}
        <div className="space-y-4 mt-4">
          {/* Mostra um Loader se o formulário estiver sendo enviado */}
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {/* Mostra uma mensagem de "Empty" se não houver vídeo gerado */}
          {!video && !isLoading && <Empty label="No Video Generated Yet." />}

          {/* Renderiza o player de vídeo se o vídeo estiver definido */}
          {video && (
            <video
              className="w-full aspect-video rounded-lg border bg-black my-8"
              controls>
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoPage;