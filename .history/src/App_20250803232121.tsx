import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./components/ScrollButton";
import SobreMim from './SobreMim';

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
