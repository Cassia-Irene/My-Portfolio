import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header<{isScrolled: boolean}>`
    width: 100%;
    position: fixed;
    top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    background-color: ${({ isScrolled }) => (isScrolled ? '#00171F' : 'transparent')};
    transition: background-color 0.3s ease;
    z-index: 1000;
}
`;

const Logo = styled.img`
    width: 95px;
    height: 76px;
`;

const ContatoButton = styled.button`
    width: 133px;
    height: 47px;
    border: solid 2px #FFBB1B;
    border-radius: 10px;
    background-color: transparent;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
        background-color: #FFBB1B;
        font-weight: 500;
    }

`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, )
  return (
    <HeaderContainer>
        <Logo src="/src/assets/logo.svg" alt="Logo" />
      <ContatoButton>Contato</ContatoButton>
    </HeaderContainer>
  );
};

export default Header;