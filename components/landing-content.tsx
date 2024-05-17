"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import React from "react"; // Importa a biblioteca React para criar componentes

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Importa os componentes de card do diretório components/ui/card
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Importa os componentes de avatar do diretório components/ui/avatar

// Define um array de objetos com dados de testemunhos
const testimonials = [
  {
    name: "Swadesh", // Nome do autor do testemunho
    avatar: "SN", // Iniciais do nome do autor
    title: "Software Engineer", // Cargo do autor
    description: "This is the best application I've ever used!" // Testemunho
  },
  {
    name: "Saroj",
    avatar: "SS",
    title: "Designer",
    description: "I use this daily for generating new photos!"
  },
  {
    name: "Santosh",
    avatar: "SD",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!"
  },
  {
    name: "Kanha",
    avatar: "SP",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!"
  }
];

// Define o componente LandingContent
// div 1 Renderiza um título de seção
// h2    Renderiza uma grid para organizar os cards de testemunhos
/* div 2 Mapeia o array de testemunhos para renderizar um card para cada um */
export default function LandingContent() {
  return (
    // Renderiza um div com as classes CSS para espaçamento
    <div className="px-10 pb-20">
      
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {}
        {testimonials.map((item) => (
          <Card
            key={item.description} // Define uma chave única para cada card
            className="bg-[#192339] border-none text-white" // Define as classes CSS para o card
          >
            {/* Renderiza o cabeçalho do card */}
            <CardHeader>
              {/* Renderiza uma div para o avatar e nome do autor */}
              <div className="flex flex-row items-center">
                {/* Renderiza o avatar do autor */}
                <Avatar className="h-10 w-10 mr-4">
                  {/* Renderiza um fallback para o avatar caso a imagem não esteja disponível
                  //Exibe as iniciais do nome do autor */}
                  <AvatarFallback className="text-black font-bold">
                    {item.avatar}   
                  </AvatarFallback>
                </Avatar>
                {/* Renderiza o título do card */}
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    {/* Renderiza o nome do autor */}
                    <p className="text-lg">{item.name}</p>
                    {/* Renderiza o cargo do autor */}
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
              </div>
              {/* Renderiza o conteúdo do card */}
              <CardContent className="pt-4 px-0">
                {item.description}  {/*Exibe o testemunho*/}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}