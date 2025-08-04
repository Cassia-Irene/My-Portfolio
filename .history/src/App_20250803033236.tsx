import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";

const App: React.FC = () => {

  return (
    <>
    <SidebarNavigation />
      <GlobalStyle />
      <Header />
      <Hero />
      <Sobre
    </>
  );
};

export default App;
