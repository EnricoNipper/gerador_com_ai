import React from "react"; // Importa a biblioteca React para criar componentes
import Image from "next/image"; // Importa o componente Image do Next.js para renderizar imagens

// Define o componente Loader
export function Loader() {
  return (
    // Renderiza um div com as classes CSS para centralizar o conteúdo
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      {/* Renderiza um div para a imagem de loading com as classes CSS para tamanho e animação*/}
      <div className="w-10 h-10 relative animate-spin">
        {/* Renderiza a imagem de loading */}
        <Image alt="Loading" fill src="/logo.png" /> 
      </div>
      {/*  Renderiza um parágrafo com o texto de loading e as classes CSS para estilo*/}
      <p className="text-sm text-muted-foreground">Genius Is Thinking...</p>
    </div>
  );
}