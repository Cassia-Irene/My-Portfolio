import styled from "styled-components";

const SectionContatos = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 120px;
  margin-bottom: 45px;
  justify-content: center;
  text-align: center;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 90px;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 40px;
    letter-spacing: 4px;
    color: #F0F8FF;
  }
`;

const Text = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-self: center;
  margin-top: 45px;
  width: 580px;
  text-align: center;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 22px;
    letter-spacing: 4px;
    color: #FFBB1B;
    text-align: justify;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 45px;
`;

const SocialButton = styled.a< { 
  hoverColor: string;
  glowColor: string;
 }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: transparent;
  border: solid 2px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

  img {
    width: 70%;
    height: 70%;
    filter: brightness(0) invert(1);
  }

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    border-color: ${({ hoverColor }) => hoverColor};
    box-shadow: 0 0 15px ${({ glowColor }) => glowColor};
  }

`;

const Contatos = () => {

  return (
    <SectionContatos id="section-04">
    <Title>Contato</Title>
     <SubtitleWrapper>
        <p>Vamos conversar!</p>
      </SubtitleWrapper>
      <Text>
        <p>Tem um novo projeto em mente? Ou quer apenas dizer oi? Estou disponível para conversar e responder suas perguntas.</p>
      </Text>

            <SocialWrapper>
        <SocialButton
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#33D951"
          glowColor="rgba(37, 211, 102, 0.8)"
        >
          <img src="/src/assets/contatos-sapp.svg" alt="WhatsApp" />
        </SocialButton>

        <SocialButton
          href="mailto:seuemail@example.com"
          hoverColor="linear-gradient(90deg, #4285F4 0%, #C5221F 25%, #EA4335 50%, #FBBC04 75%, #34A853 100%)"
          glowColor="rgba(234, 67, 53, 0.8)"
        >
          <img src="/src/assets/contatos-email.svg" alt="Email" />
        </SocialButton>

          <SocialButton
          href="https://linkedin.com/in/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#0077B5"
        >
          <img src="/src/assets/contatos-linkedin.svg" alt="LinkedIn" />
        </SocialButton>

        <SocialButton
          href="https://instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#E1306C"
        >
          <img src="/src/assets/contatos-instagram.svg" alt="Instagram" />
        </SocialButton>

        <SocialButton
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#000000"
          glowColor="rgba(24, 23, 23, 0.8)"
        >
          <img src="/src/assets/contatos-github.svg" alt="GitHub" />
        </SocialButton>
      </SocialWrapper>

    </SectionContatos>
  );
};

export default Contatos;