// Header.tsx
import React from 'react';
import CardNav from './CardNav';
import logo from './logo.svg';

const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#company", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#cases", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "#email", ariaLabel: "Email us" },
        { label: "Twitter", href: "#twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <header className="relative z-[100]">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </header>
  );
};

export default Header;
