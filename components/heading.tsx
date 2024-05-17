import React from "react"; // Importa a biblioteca React para criar componentes
import { LucideIcon } from "lucide-react"; // Importa a biblioteca Lucide-React para usar ícones

import { cn } from "@/lib/utils"; // Importa a função cn para concatenar classes CSS

// Define a interface HeadingProps com as propriedades do componente
interface HeadingProps {
  title: string; // Título da seção
  description: string; // Descrição da seção
  icon: LucideIcon; // Ícone da seção
  iconColor?: string; // Cor do ícone (opcional)
  bgColor?: string; // Cor de fundo do ícone (opcional)
}

// Define a função Heading que recebe as props do tipo HeadingProps
export default function Heading({
  description,
  icon: Icon, // Desestrutura a propriedade icon e renomeia para Icon
  title,
  bgColor,
  iconColor
}: HeadingProps) {
  return (
    // div 1 Renderiza um div com as classes CSS para espaçamento e estilo
    // div 2 = Renderiza um div para o ícone com as classes CSS para padding, largura, arredondamento e cor de fundo
    // icon Renderiza o ícone usando a propriedade Icon com as classes CSS para tamanho e cor
    // div 3 Renderiza um div para o título e descrição
    // h2  Renderiza o título com a classe CSS para tamanho e estilo da fonte
    // p1  Renderiza a descrição com a classe CSS para tamanho e cor do texto
    <div className="px-4 lg:px-8 items-center gap-x-3 mb-8 flex">
     
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
     
      <div>
        
        <h2 className="text-3xl font-bold">{title}</h2>
        
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}