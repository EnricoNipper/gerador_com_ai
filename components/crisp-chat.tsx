// Habilita o modo estrito para melhor tratamento de erros (recomendado)
"use strict";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    // Inicializa o chat Crisp usando sua ID do site
    Crisp.configure("1f439c42-5ee8-40bf-a9d0-0e0672e7a247");
  }, []); // A matriz de dependências garante que a configuração seja executada apenas uma vez

  // Retorna um elemento vazio para evitar renderização desnecessária
  return null;
}
