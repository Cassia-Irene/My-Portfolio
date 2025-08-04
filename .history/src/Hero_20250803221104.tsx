import styled from "styled-components";

import centralImg from "./assets/svg_central.svg";
import img1 from "./assets/svg_figma.svg";
import img2 from "./assets/svg_html.svg";
import img3 from "./assets/svg_js.svg";
import img4 from "./assets/svg_css.svg";
import ArrowRight from "./assets/svg_seta_hero_sobre-mim.svg";
import ArrowDown from "./assets/svg_seta-down.svg";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 122px;
  position: relative;
  gap: 107px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #FFBB1B;
  position: relative;
  left: 30%;
`;

const Name = styled.h1`
  font-size: 120px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFFFFF;
  letter-spacing: 8px;
  position: relative;
  margin-top: -23px;
  left: 30%;
`;

const IreneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: -51px;
  position: relative;
  left: 30%;
`;

const Rectangle = styled.div`
  width: 132.02px;
  height: 4px;
  background-color: #ffbb1b;
`;

const Irene = styled.h2`
  font-size: 90px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFFFFF;
  letter-spacing: 4px;
`;

const AboutArrowIcon = styled.img`
  transition: transform 0.4s ease-in-out;
`;

const AboutButton = styled.button`
  display: flex;
  position: relative;
  left: 46%;
  align-items: center;
  background: transparent;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #ffbb1b;

  
  &:hover ${AboutArrowIcon} {
    transform: rotate(90deg);
  }
`;

const Right = styled.div`
  position: relative;
  width: 520px;
  height: 400px;
`;

const FloatingImg = styled.img<{ top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  width: 100px;
  animation: float 4s ease-in-out infinite;
  ${({ top, left, right, bottom }) => `
    top: ${top || "auto"};
    left: ${left || "auto"};
    right: ${right || "auto"};
    bottom: ${bottom || "auto"};
  `}

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const CentralImg = styled.img`
  width: 550px;
  height: 535.96px;
  position: absolute;
  top: -10%;
  left: 70%;
  transform: translate(-50%, -50%);
  animation: float 5s ease-in-out infinite;
`;

const ScrollDown = styled.button`
  position: absolute;
  bottom: 85px;
  left: 137%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: #ffbb1b;
  rotate: 270deg;

  img {
    width: 20px;
    height: 20px;
    rotate: 90deg;
    }

  &:hover img {
    transform: translateY(5px);
    transition: 0.3s ease;
  }
`;

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="section-00">
      {/* Lado Esquerdo */}
      <Left>
        <Intro>Olá, meu nome é</Intro>
        <Name>Cássia</Name>
        <IreneWrapper>
          <Rectangle />
          <Irene>Irene</Irene>
        </IreneWrapper>
        <AboutButton>
          Sobre mim <AboutArrowIcon src={ArrowRight} alt="Seta para a direita" />
        </AboutButton>
      </Left>

      {/* Lado Direito */}
      <Right>
        <CentralImg src={centralImg} alt="Principal" />
        <FloatingImg src={img1} top="-22%" left="35%" />
        <FloatingImg src={img2} top="-35%" right="-55%" />
        <FloatingImg src={img3} bottom="-50%" left="55%" />
        <FloatingImg src={img4} bottom="-40%" right="-60%" />
      </Right>

      {/* Scroll Down */}
      <ScrollDown onClick={scrollToNext}>
        <img src={ArrowDown} alt="Scroll Down" />
        Scroll Down
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero;
