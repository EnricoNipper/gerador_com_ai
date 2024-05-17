// Importa componentes específicos da biblioteca de componentes de interface do usuário do avatar
import { Avatar, AvatarImage } from "@/components/ui/avatar";

/**
 * Componente BotAvatar
 * 
 * Este componente renderiza um avatar específico para bots.
 * Ele usa os componentes Avatar e AvatarImage da biblioteca de interface do usuário do avatar.
 * 
 * @returns {JSX.Element} O componente BotAvatar
 */
export function BotAvatar() {
  return (
    <Avatar // Envolve o conteúdo em um componente Avatar para estilização
      className="h-8 w-8" // Define a altura e largura do avatar (8px)
    >
      <AvatarImage // Exibe uma imagem dentro do avatar
        className="p-1"  // Adiciona um preenchimento de 1px ao redor da imagem
        src="/logo.png" // Define a origem da imagem (substitua pelo seu logotipo)
      />
    </Avatar>
  );
}
import React from "react";