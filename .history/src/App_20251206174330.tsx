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

      <main>
        {/* Seções para testar o CardNav */}
        <section id="company" style={{ height: '1vh', background: '#111' }}>Company Section</section>
        <section id="careers" style={{ height: '100vh', background: '#222' }}>Careers Section</section>
        <section id="featured" style={{ height: '100vh', background: '#333' }}>Featured Projects</section>
        <section id="cases" style={{ height: '100vh', background: '#444' }}>Case Studies</section>
        <section id="email" style={{ height: '100vh', background: '#555' }}>Email Section</section>
        <section id="twitter" style={{ height: '100vh', background: '#666' }}>Twitter Section</section>
        <section id="linkedin" style={{ height: '100vh', background: '#777' }}>LinkedIn Section</section>
      </main>
    </>
  );
};

export default App;
