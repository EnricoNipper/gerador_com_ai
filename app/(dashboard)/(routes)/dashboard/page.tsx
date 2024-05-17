"use client";

import React from "react";
import {
  ArrowRight,
  MessageSquare,
  Music,
  ImageIcon,
  VideoIcon,
  Code
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// Define um array de objetos com informações sobre cada ferramenta
const tools = [
  {
    label: "Conversation", // Nome da ferramenta
    icon: MessageSquare, // Ícone da ferramenta
    color: "text-violet-500", // Cor do ícone
    bgColor: "bg-violet-500/10", // Cor de fundo do ícone
    href: "/conversation" // URL da página da ferramenta
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  }
];

// Componente para a página Dashboard
export default function DashboardPage() {
  // Inicializa o roteador para navegação na página
  const router = useRouter();

  // Renderiza o componente DashboardPage
  return (
    <div>
      <div className="mb-8 space-y-4">
        {/* Renderiza o título da página */}
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI
        </h2>
        {/* Renderiza a descrição da página */}
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the Smartest AI - Explore the Power of AI
        </p>
      </div>

      {/* Renderiza a lista de ferramentas */}
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          // Renderiza um Card para cada ferramenta
          <Card
            // Redireciona para a página da ferramenta ao clicar no Card
            onClick={() => router.push(tool.href)}
            // Define a chave do Card
            key={tool.href}
            // Define o estilo do Card
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md trantion cursor-pointer"
          >
            {/* Renderiza o ícone e o nome da ferramenta */}
            <div className="flex items-center gap-x-4">
              {/* Renderiza o ícone da ferramenta */}
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              {/* Renderiza o nome da ferramenta */}
              <div className="font-semibold">{tool.label}</div>
            </div>
            {/* Renderiza o ícone de seta para a direita */}
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}