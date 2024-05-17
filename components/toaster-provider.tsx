"use client"; // Indica que este componente é específico do lado do cliente (client-side)

import React from "react"; // Importa a biblioteca React para criar componentes
import { Toaster } from "react-hot-toast"; // Importa o componente Toaster da biblioteca react-hot-toast

// Define o componente ToasterProvider
export default function ToasterProvider() {
  return <Toaster />; // Renderiza o componente Toaster
}
