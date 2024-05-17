"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import React from "react"; // Importa a biblioteca React para criar componentes

import CrispChat from "@/components/crisp-chat"; // Importa o componente CrispChat do diretório components

export default function CrispProvider() { // Define o componente CrispProvider
  return <CrispChat />; // Renderiza o componente CrispChat dentro do CrispProvider
}