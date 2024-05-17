import React from "react"; // Importa a biblioteca React para criar componentes

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Importa os componentes Avatar, AvatarFallback e AvatarImage do diretório components/ui/avatar

// Define a função UserAvatar
export function UserAvatar() {
  return (
    // Renderiza o componente Avatar com as classes CSS para tamanho
    <Avatar className="h-8 w-8">
      {/* Renderiza o componente AvatarImage, que mostrará a imagem do usuário, se disponível */}
      <AvatarImage/>
      {/* Renderiza o componente AvatarFallback, que será mostrado caso a imagem do usuário não esteja disponível */}
      <AvatarFallback>
        {/* Adicione aqui o conteúdo a ser exibido no fallback, por exemplo, as iniciais do nome do usuário */}
      </AvatarFallback>
    </Avatar>
  );
}
