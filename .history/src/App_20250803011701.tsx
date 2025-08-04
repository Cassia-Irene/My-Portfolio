import React from "react";
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Hero from './Hero';

const App: React.FC = () => {

  return (
    <>
    <div id="root"></div>
      <GlobalStyle />
      <Header />
      <Hero />
    </>
  );
};

export default App;
