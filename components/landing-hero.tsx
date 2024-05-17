"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import TypewriterComponent from "typewriter-effect"; // Importa a biblioteca TypewriterComponent para criar efeitos de máquina de escrever
import Link from "next/link"; // Importa o componente Link do Next.js para criar links internos

import { Button } from "@/components/ui/button"; // Importa o componente Button do diretório components/ui/button

// Define o componente LandingHero
export default function LandingHero() {
  return (
    // Renderiza um div com as classes CSS para estilo e espaçamento
    <div className="text-white font-bold py-36 text-center space-y-5">
      // Renderiza um div para o título principal
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1> // Renderiza o título "The Best AI Tool for"
        // Renderiza um div para o texto que muda dinamicamente
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {/* Renderiza o componente TypewriterComponent para criar o efeito de máquina de escrever */}
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Video Generation.",
                "Music Generation.",
                "Blog Writing.",
                "Mail Writing."
              ], // Define as strings que serão exibidas na máquina de escrever
              autoStart: true, // Define se a máquina de escrever deve iniciar automaticamente
              loop: true // Define se a máquina de escrever deve repetir as strings
            }}
          />
        </div>
      </div>
      // Renderiza um div para a descrição do título
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster. // Renderiza a descrição
      </div>
      // Renderiza um div para o botão de ação
      <div>
        {/* Renderiza o componente Link do Next.js para criar um link para a página /dashboard */}
        <Link href="/dashboard">
          {/* Renderiza o componente Button */}
          <Button
            variant="premium" // Define a variante do botão como "premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold" // Define as classes CSS para o botão
          >
            {/*Start Generating For Free // Renderiza o texto do botão*/}
          </Button>
        </Link>
      </div>
      {/* Renderiza um div para um texto adicional*/}
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
       { /*No credit card required. // Renderiza o texto adicional*/}
      </div>
    </div>
  );
}