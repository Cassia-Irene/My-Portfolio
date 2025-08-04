
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
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
  return (
    <HeaderContainer>
        <Logo src="/src/assets/logo.svg" alt="Logo" />
      <ContatoButton>Contato</ContatoButton>
    </HeaderContainer>
  );
};

export default Header;