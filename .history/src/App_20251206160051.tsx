import React from "react";
import GlobalStyle from './GlobalStyle';
import LightRays from "./components/LightRays";
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./ScrollButton";
import SobreMim from './SobreMim';
import Skills from './Skills';
import Projetos from "./Projetos";
import Contatos from "./Contatos";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      {/* Header fixo */}
      <Header />

      {/* Hero com luz de fundo */}
      <div className="relative w-full min-h-[100vh] overflow-hidden">
        <Hero />
        {/* Luz atrás da Hero */}
        <LightRays className="absolute inset-0 z-[-1] opacity-80" />
      </div>

      {/* Demais seções */}
      <SidebarNavigation />
      <ScrollButton />
      <SobreMim />
      <Skills />
      <Projetos />
      <Contatos />
    </>
  );
};

export default App;
