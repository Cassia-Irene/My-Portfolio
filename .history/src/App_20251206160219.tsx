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

      {/* Header sempre no topo */}
      <Header />

      {/* LightRays fixa atrás da Hero */}
      <LightRays className="fixed top-0 left-0 w-full h-screen z-[-1] opacity-80" />

      {/* Hero */}
      <div className="relative w-full min-h-[100vh] overflow-hidden">
        <Hero />
      </div>

      {/* Outras seções */}
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
