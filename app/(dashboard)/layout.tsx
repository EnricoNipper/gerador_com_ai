import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Genius",
  description: "AI SaaS Platform."
};

// Componente de layout do Dashboard
export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // ... (lógica para buscar dados do usuário)

  return (
    // Fornece o contexto da sessão para todos os componentes filhos
    
      <div className="h-full relative">
        {/* Renderiza a Sidebar */}
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
          <Sidebar />
        </div>
        {/* Renderiza o conteúdo principal */}
        <main className="md:pl-72">
          {/* Renderiza a Navbar */}
          <Navbar />
          {/* Renderiza o conteúdo dos filhos */}
          {children}
        </main>
      </div>
  );
}