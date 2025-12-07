import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import SidebarNavigation from "./SidebarNavigation";
import ScrollButton from "./ScrollButton";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <SidebarNavigation />
      <ScrollButton />

    
    </>
  );
};

export default App;
