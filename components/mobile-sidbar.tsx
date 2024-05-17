"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import React, { useEffect, useState } from "react"; // Importa as bibliotecas React, useEffect e useState
import { Menu } from "lucide-react"; // Importa o ícone Menu da biblioteca Lucide-React

import { Button } from "@/components/ui/button"; // Importa o componente Button do diretório components/ui/button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Importa os componentes Sheet, SheetContent e SheetTrigger do diretório components/ui/sheet
import Sidebar from "@/components/sidebar"; // Importa o componente Sidebar do diretório components/sidebar

// Define o componente MobileSidebar
export default function MobileSidebar() {
  // Define o estado isMounted para verificar se o componente foi montado
  const [isMounted, setIsMounted] = useState(false); 

  // Define um useEffect para definir o estado isMounted como true quando o componente for montado
  useEffect(() => {
    setIsMounted(true); 
  }, []);

  // Retorna null se o componente ainda não foi montado
  if (!isMounted) return null; 

  return (
    // Renderiza o componente Sheet
    <Sheet>
      {/* Renderiza o componente SheetTrigger que abre o sidebar */}
      <SheetTrigger>
        {/* Renderiza o botão que abre o sidebar */}
        <Button variant="ghost" size="icon" className="md:hidden">
          {/* Renderiza o ícone Menu */}
          <Menu /> 
        </Button>
      </SheetTrigger>
      {/* Renderiza o componente SheetContent que contém o conteúdo do sidebar */}
      <SheetContent side="left" className="p-0">
        {/* Renderiza o componente Sidebar */}
        <Sidebar/> 
      </SheetContent>
    </Sheet>
  );
}