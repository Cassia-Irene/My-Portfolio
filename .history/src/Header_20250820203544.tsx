import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 30px;
  width: 100%;
  z-index: 1000;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 100px;

  @media (min-width: 1440px) {
    padding: 0 160px;
  }
  
  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  } 

  @media (max-width: 480px) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    top: 15px;
  }

}

`;

const Logo = styled.img`
  width: 95px;
  height: 76px;

  @media (max-width: 768px) {
    width: 80px;
    height: 64px;
  }

   @media (max-width: 480px) {
    width: 70px;
    height: 56px;
  }

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

  @media (max-width: 768px) {
    width: 120px;
    height: 42px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 40px;
    font-size: 16px;
  }

`;

const Header = () => {
  return (
    <HeaderContainer>
        <Logo src="/src/assets/logo.svg" alt="Logo" />
        <ContatoButton
            onClick={() => {
            const section = document.getElementById("section-04");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contato
        </ContatoButton>
    </HeaderContainer>
  );
};

export default Header;