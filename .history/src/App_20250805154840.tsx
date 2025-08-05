import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./ScrollButton";
import SobreMim from './SobreMim';
import Skills from './Skills';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <SidebarNavigation />
      <ScrollButton />
      <Hero />
      <SobreMim />
      <Skills />
      {/* Add other sections here as needed */}
    </>
  );
};

export default App;
