import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import
import SobreMim from './SobreMim';

const App: React.FC = () => {

  return (
    <>
    <SidebarNavigation />
      <GlobalStyle />
      <Header />
      <Hero />
      <SobreMim />
    </>
  );
};

export default App;
