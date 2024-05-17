import React from "react"; // Importa a biblioteca React para criar componentes


import MobileSidebar from "@/components/mobile-sidbar"; // Importa o componente MobileSidebar do diretório components/mobile-sidebar

// Define o componente Navbar
export default async function Navbar() {
  return (
    // Renderiza um div com as classes CSS para espaçamento e alinhamento
    <div className="flex items-center p-4">
      {/* Renderiza o componente MobileSidebar */}
      <MobileSidebar />
      {/* Renderiza um div para o botão de usuário com as classes CSS para largura e alinhamento */}
      <div className="flex w-full justify-end">
      </div>
    </div>
  );
}
