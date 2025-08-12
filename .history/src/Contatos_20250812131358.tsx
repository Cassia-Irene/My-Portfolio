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

/* SocialButton:
   - ::before = camada externa (anel/borda) — por padrão branca com blur.
   - o centro é transparente porque o ::before é "mascarado" com radial-gradient,
     deixando um recorte interno com exatamente 2px de afastamento (gap).
   - no hover, ::before recebe hoverGradient (se informado) ou hoverColor.
*/
const SocialButton = styled.a<{
  hoverColor?: string;         // cor sólida para o anel (ex: whatsapp, linkedin, github)
  hoverGradient?: string;      // gradiente para o anel (ex: email, instagram)
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
    display: block;
  }

  /* camada externa = o "anel" (por padrão branco) */
  &::before {
    content: "";
    position: absolute;
    inset: 0; /* ocupa todo o botão */
    border-radius: 50%;
    background: #ffffff; /* anel branco por padrão */
    /* blur = 10 */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    /* mascarar o centro para criar o gap de 2px -> center ficará transparente */
    -webkit-mask: radial-gradient(circle, transparent calc(50% - 2px), black calc(50% - 2px));
    mask: radial-gradient(circle, transparent calc(50% - 2px), black calc(50% - 2px));
    transition: background 220ms ease, box-shadow 220ms ease;
    z-index: 1;
  }

  /* não precisamos de uma camada interna separada — o centro é transparente
     porque o ::before é mascarado. O ícone está acima com z-index:3. */

  &:hover::before {
    /* se foi passada uma string que começa com "linear-gradient" usamos ela
       senão usamos hoverColor (cor sólida). */
    background: ${({ hoverGradient, hoverColor }) =>
      hoverGradient ? hoverGradient : hoverColor ? hoverColor : "#ffffff"};
    /* mantemos o blur branco (se quiser glow colorido trocamos aqui) */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
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
          Tem um novo projeto em mente? Ou quer apenas dizer oi? Estou disponível para conversar e
          responder suas perguntas.
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
          hoverGradient="linear-gradient(90deg, #4285F4 0%, #C5221F 25%, #EA4335 50%, #FBBC04 75%, #34A853 100%)"
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
          hoverGradient="linear-gradient(90deg, #FEC053 0%, #F2203E 33%, #B729A8 65%, #5342D6 100%)"
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
