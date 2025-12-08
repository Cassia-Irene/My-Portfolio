import React from "react";
import GlobalStyle from './GlobalStyle';

import Header from './Header';
//import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./ScrollButton";
//import SobreMim from './SobreMim';
//import Skills from './Skills';
//import Projetos from "./Projetos";
//import Contatos from "./Contatos";

const App: React.FC = () => {

  return (
    <>
      <div className="bg-yellow-500 text-white p-4 text-2xl">
  Tailwind funcionando!
</div>

      <GlobalStyle />
      <Header />

      <SidebarNavigation />
      <ScrollButton />
    
      
    </>
  );
};

export default App;
