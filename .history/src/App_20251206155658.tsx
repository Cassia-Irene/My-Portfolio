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

      {/* Sidebar e botão de scroll ficam sobre todos os conteúdos */}
      <SidebarNavigation />
      <ScrollButton />

      {/* Primeira "página" com luz de fundo */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <LightRays className="opacity-80" />

        {/* Conteúdo da primeira seção */}
        <Header />
        <Hero />
      </div>

      {/* Outras seções sem luz de fundo */}
      <SobreMim />
      <Skills />
      <Projetos />
      <Contatos />
    </>
  );
};

export default App;
