// Contatos.tsx
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

/* SocialButton refeito:
   - ::before = camada externa (a "borda" / anel)
   - ::after  = camada interna (inset 2px) --> garante o gap de 2px
   - img no centro com z-index superior
*/
const SocialButton = styled.a<{
  hoverColor?: string;        // cor sólida (whatsapp, linkedin, github)
  borderGradient?: string;    // quando quiser gradiente (email, instagram)
}>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  outline: none;

  /* ícone */
  img {
    width: 50%;
    height: auto;
    z-index: 3;
    pointer-events: none;
  }

  /* camada externa = mostra a borda (por padrão branca) */
  &::before {
    content: "";
    position: absolute;
    inset: 0; /* ocupa todo o botão */
    border-radius: 50%;
    background: #ffffff; /* borda branca por padrão */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* blur = 10 */
    transition: background 250ms ease, box-shadow 250ms ease;
    z-index: 0;
  }

  /* camada interna = centro (inset = 2px cria o gap de 2px) */
  &::after {
    content: "";
    position: absolute;
    inset: 2px; /* <-- esse é o GAP de 2px entre borda e centro */
    border-radius: 50%;
    background: transparent; /* centro permanece transparente (não mudamos) */
    transition: background 200ms ease;
    z-index: 1;
  }

  /* hover: se borderGradient estiver presente, usamos ele na camada externa;
     senão, usamos hoverColor (cor sólida). A camada interna continua transparente (como pediu). */
  &:hover::before {
    background: ${({ borderGradient, hoverColor }) =>
      borderGradient ? borderGradient : hoverColor ? hoverColor : "#ffffff"};
    /* mantemos o blur branco — se quiser glow colorido, dá pra ajustar aqui */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  &:hover::after {
    /* mantemos transparente (não altera o centro) */
    background: transparent;
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
        <p>
          Tem um novo projeto em mente? Ou quer apenas dizer oi? Estou disponível para conversar e responder suas perguntas.
        </p>
      </Text>

      <SocialWrapper>
        {/* WhatsApp - cor sólida */}
        <SocialButton
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#33D951"
        >
          <img src="/src/assets/contatos-zap.svg" alt="WhatsApp" />
        </SocialButton>

        {/* Email - borda GRADIENT no hover */}
        <SocialButton
          href="mailto:seuemail@example.com"
          borderGradient="linear-gradient(90deg, #4285F4 0%, #C5221F 25%, #EA4335 50%, #FBBC04 75%, #34A853 100%)"
        >
          <img src="/src/assets/contatos-email.svg" alt="Email" />
        </SocialButton>

        {/* LinkedIn - cor sólida */}
        <SocialButton
          href="https://linkedin.com/in/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#00669C"
        >
          <img src="/src/assets/contatos-linkedin.svg" alt="LinkedIn" />
        </SocialButton>

        {/* Instagram - borda GRADIENT no hover */}
        <SocialButton
          href="https://instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          borderGradient="linear-gradient(90deg, #FEC053 0%, #F2203E 33%, #B729A8 65%, #5342D6 100%)"
        >
          <img src="/src/assets/contatos-instagram.svg" alt="Instagram" />
        </SocialButton>

        {/* GitHub - cor sólida */}
        <SocialButton
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#000000"
        >
          <img src="/src/assets/contatos-github.svg" alt="GitHub" />
        </SocialButton>
      </SocialWrapper>
    </SectionContatos>
  );
};

export default Contatos;
