"use client";

import React, { useState } from "react";
import { DownloadIcon, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";


import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";

import { amountOptions, formSchema, resolutionOptions } from "./constants";

// Componente para a página de geração de imagens
const ImagePage = () => {
  // Inicializa o roteador para navegação na página
  const router = useRouter();
  // Define o estado das imagens geradas
  const [images, setImages] = useState<string[]>([]);

  // Cria um formulário usando o hook useForm do react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    // Utiliza o resolvedor zod para validar o formulário com base no schema definido
    resolver: zodResolver(formSchema),
    // Define os valores padrão do formulário
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512"
    }
  });

  // Verifica se o formulário está em estado de envio
  const isLoading = form.formState.isSubmitting;

  // Função para lidar com o envio do formulário
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Limpa a lista de imagens antes de gerar novas
      setImages([]);

      // Faz uma requisição POST para a API de imagem, enviando os valores do formulário
      const response = await axios.post("/api/image", values);

      // Extrai as URLs das imagens da resposta da API
      const urls = response.data.map((image: { url: string }) => image.url);

      // Atualiza o estado das imagens com as novas URLs
      setImages(urls);

      // Limpa o formulário após o envio
      form.reset();
    } finally {
      // Recarrega o roteador para atualizar o estado da página
      router.refresh();
    }
  };

  // Renderiza o componente ImagePage
  return (
    <div>
      {/* Renderiza o componente Heading com informações sobre a página */}
      <Heading
        title="Image Generation"
        description="Turn your prompt into an Image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
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
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      {/* Renderiza o componente Input */}
                      <Input
                        // Desabilita o input se o formulário estiver sendo enviado
                        disabled={isLoading}
                        placeholder="A picture of a horse in Swiss alps"
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
              {/* Renderiza o campo 'amount' do formulário */}
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    {/* Renderiza o componente Select para a quantidade de imagens */}
                    <Select
                      // Desabilita o select se o formulário estiver sendo enviado
                      disabled={isLoading}
                      // Define a função de mudança de valor do select
                      onValueChange={field.onChange}
                      // Define o valor atual do select
                      value={field.value}
                      // Define o valor padrão do select
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          {/* Renderiza o valor atual do select */}
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* Renderiza as opções do select */}
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {/* Renderiza o label de cada opção */}
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* Renderiza o campo 'resolution' do formulário */}
              <FormField
                name="resolution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    {/* Renderiza o componente Select para a resolução das imagens */}
                    <Select
                      // Desabilita o select se o formulário estiver sendo enviado
                      disabled={isLoading}
                      // Define a função de mudança de valor do select
                      onValueChange={field.onChange}
                      // Define o valor atual do select
                      value={field.value}
                      // Define o valor padrão do select
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          {/* Renderiza o valor atual do select */}
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* Renderiza as opções do select */}
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {/* Renderiza o label de cada opção */}
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
        {/* Renderiza a seção de exibição das imagens geradas */}
        <div className="space-y-4 mt-4">
          {/* Mostra um Loader se o formulário estiver sendo enviado */}
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {/* Mostra uma mensagem de "Empty" se não houver imagens geradas */}
          {images.length === 0 && !isLoading && (
            <Empty label="No Images Generated." />
          )}
          {/* Renderiza as imagens geradas em uma grade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              // Renderiza um Card para cada imagem
              <Card key={src} className="rounded-lg overflow-hidden">
                {/* Renderiza a imagem dentro do Card */}
                <div className="relative aspect-square">
                  <Image alt="Image" fill src={src} />
                </div>
                {/* Renderiza o rodapé do Card */}
                <CardFooter className="p-2">
                  {/* Renderiza o botão para download da imagem */}
                  <Button
                    variant="secondary"
                    className="w-full"
                    // Abre a imagem em uma nova aba ao clicar no botão
                    onClick={() => window.open(src)}
                  >
                    {/* Renderiza o ícone de download */}
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImagePage;