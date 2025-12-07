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
      <LightRays />
      <Navbar />
      <SidebarNavigation />
      <ScrollButton />
      <Hero />
      <SobreMim />
      <Skills />
      <Projetos/>
      <Contatos />
    </>
  );
};

export default App;
