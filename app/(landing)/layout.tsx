import React from "react";

// Componente de layout para a página de landing
export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // Define o elemento principal da página como `main`
    <main className="h-full bg-[#111827] overflow-auto">
      {/* Cria um div com largura máxima da tela e altura total */}
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
}