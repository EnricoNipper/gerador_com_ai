
import React from "react"; // Importa a biblioteca React para criar componentes
import Image from "next/image"; // Importa o componente Image do Next.js para renderizar imagens

// Define a interface EmptyProps com a propriedade label como string
interface EmptyProps {
  label: string;
}

// Define a função Empty que recebe as props do tipo EmptyProps
export function Empty({ label }: EmptyProps) {
  return (
    // div 1 Renderiza um div com as classes CSS para centralizar o conteúdo  
    // div 2 Renderiza um div para a imagem com as classes CSS para definir tamanho e posição relativa
    // imagen 1Renderiza a imagem usando o componente Image do Next.js
    // p 1  Renderiza um parágrafo com a classe CSS para a cor do texto e o texto do label
    <div className="h-full p-20 flex flex-col items-center justify-center">
      
      <div className="relative h-72 w-72">
        
        <Image alt="empty" fill src="/empty.png" /> 
      </div>
      
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}
