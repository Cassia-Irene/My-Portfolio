import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./ScrollButton";
import SobreMim from './SobreMim';
import Skills from

const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <SidebarNavigation />
      <ScrollButton />
      <Hero />
      <SobreMim />
    </>
  );
};

export default App;
