"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import Image from "next/image"; // Importa o componente Image do Next.js para renderizar imagens
import { usePathname } from "next/navigation"; // Importa o hook usePathname do Next.js para obter o caminho atual da página
import Link from "next/link"; // Importa o componente Link do Next.js para criar links internos
import React from "react"; // Importa a biblioteca React para criar componentes
import { Montserrat } from "next/font/google"; // Importa a fonte Montserrat do Google Fonts
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings
} from "lucide-react"; // Importa os ícones da biblioteca Lucide-React

import { cn } from "@/lib/utils"; // Importa a função cn para concatenar classes CSS

// Define a fonte Montserrat com peso 600 e subconjunto latino
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

// Define um array de objetos com as rotas do sidebar
const routes = [
  {
    label: "Dashboard", // Rótulo da rota
    icon: LayoutDashboard, // Ícone da rota
    href: "/dashboard", // Caminho da rota
    color: "text-sky-500" // Cor do ícone
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700"
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings"
  }
];

// Define o componente Sidebar
export default function Sidebar(){
  // Obtém o caminho atual da página usando o hook usePathname
  const pathname = usePathname(); 

  return (
    // Renderiza um div com as classes CSS para estilo e espaçamento  // Renderiza um div para o logo e título
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">

      <div className="px-3 py-2 flex-1">
        {/* Renderiza um link para a página inicial */}
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          {/* Renderiza um div para o logo com as classes CSS para tamanho e posição relativa */}
          <div className="relative w-8 h-8 mr-4">
            {/* Renderiza a imagem do logo */}
            <Image fill alt="LoGo" src="/logo.png" />
          </div>
          {/* Renderiza o título do logo */}
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        {/* Renderiza um div para as rotas do sidebar */}
        <div className="space-y-1">
          {/* Mapeia o array de rotas para renderizar um link para cada rota */}
          {routes.map((route) => (
            <Link
              href={route.href} // Define o caminho do link
              key={route.href} // Define uma chave única para cada link
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", // Define as classes CSS do link
                pathname === route.href
                  ? "text-white bg-white/10" // Define as classes CSS para o link ativo
                  : "text-zinc-400" // Define as classes CSS para o link inativo
              )}
            >
              {/* Renderiza um div para o ícone e rótulo da rota */}
              <div className="flex items-center flex-1">
                {/* Renderiza o ícone da rota */}
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {/* Renderiza o rótulo da rota */}
                {route.label} 
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}