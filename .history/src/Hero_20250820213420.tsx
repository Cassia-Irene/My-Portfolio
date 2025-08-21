import styled from "styled-components";

import centralImg from "./assets/svg_central.svg";
import img1 from "./assets/svg_figma.svg";
import img2 from "./assets/svg_html.svg";
import img3 from "./assets/svg_js.svg";
import img4 from "./assets/svg_css.svg";
import ArrowRight from "./assets/svg_seta_hero_sobre-mim.svg";
import lateralImg from "./assets/svg_lateral-1.svg"

const HeroSection = styled.section`
  position: relative;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 122px;

  @media (max-width: 1024px) {
    padding: 0 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 40px;
    text-align: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }

`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.p`
  position: relative;
  left: 40%;

  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #FFBB1B;

   @media (max-width: 1024px) {
    left: 0%;
    font-size: 23px;
  }

  @media (max-width: 768px) {
    left: 0;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

`;

const Name = styled.h1`
  position: relative;
  left: 40%;
  margin-top: -23px;

  font-size: 120px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFFFFF;
  letter-spacing: 8px;

  @media (max-width: 1024px) {
    left: 0%;
    font-size: 100px;
    letter-spacing: 6px;
  }
  
  @media (max-width: 768px) {
    left: 0;
    font-size: 80px;
    letter-spacing: 4px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
    letter-spacing: 2px;
  }
  
`;

const IreneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  
  position: relative;
  left: 40%;
  margin-top: -51px;

  @media (max-width: 1024px) {
    left: 0%;
    margin-top: -40px;
  }
  
  @media (max-width: 768px) {
    left: 0;
    justify-content: center;
    margin-top: -20px;
  }

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

  @media (max-width: 1024px) {
    font-size: 70px;
    letter-spacing: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 60px;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }

`;

const AboutArrowIcon = styled.img`
  position: relative;
  top: 2px;
  transition: transform 0.4s ease-in-out;
`;

const AboutButton = styled.button`
  position: relative;
  left: 56%;

  display: flex;
  align-items: center;

  width: 172px;
  padding: 10px 5px;

  background: transparent;
  border: none;
  cursor: pointer;
  
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #ffbb1b;

  &:hover ${AboutArrowIcon} {
    transform: rotate(90deg);
  }

  @media (max-width: 1024px) {
    left: 20%;
    font-size: 23px;
  }
  
  @media (max-width: 768px) {
    left: 0;
    margin: 20px auto 0;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    width: 150px;
    font-size: 18px;
  }

`;

const Right = styled.div`
  position: relative;
  width: 520px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

`;

interface FloatingImgProps {
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $width?: string;
  $height?: string;
  $width1024?: string;
  $height1024?: string;
}

const FloatingImg = styled.img<{ 
  top?: string; 
  left?: string; 
  right?: string; 
  bottom?: string;
  $width1024?: string;
  $height1024?: string;
  $width?: string;
  $height?: string;
}>`
  
  position: absolute;
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

    @media (max-width: 1024px) {
      width: ${(p) => p.$width1024 || p.$width || "50px"};
      height: ${(p) => p.$height1024 || p.$height || "50px"};
  }
  }
`;

const CentralImg = styled.img`
  position: relative;
  top: -10%;
  right: 55%;
  transform: translate(-50%, -50%);
  z-index: -1;

  width: 550px;
  height: 535.96px;
  
  animation: float 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    width: 400px;
    height: 385px;
    right: 15%;
  }

    @media (max-width: 768px) {
    position: static;
    transform: none;
    margin: 0 auto;
    width: 350px;
    height: auto;
  }
  
  @media (max-width: 480px) {
    width: 250px;
  }
  
`;

const LateralImg = styled.img`
  position: absolute;
  top: 87%;
  left: -1.2%;
  z-index: -1;

  width: 334px;
  height: 278px;

  filter: blur(8px);

  @media (max-width: 768px) {
    display: none;
  }
  
`;

const Hero = () => {

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
        <AboutButton
            onClick={() => {
            const section = document.getElementById("section-01");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Sobre mim <AboutArrowIcon src={ArrowRight} alt="Seta para a direita" />
        </AboutButton>
        <LateralImg src={lateralImg} alt="Imagem lateral" />
      </Left>

      {/* Lado Direito */}
      <Right>
        <CentralImg src={centralImg} alt="Principal" />
        <FloatingImg 
        src={img1} 
        top="-22%" 
        right="150%" 
        $width1024="20px" 
        $height1024="20px"
        />

        <FloatingImg src={img2} top="-35%" left="30%" />

        <FloatingImg src={img3} bottom="-60%" right="130%" />

        <FloatingImg src={img4} bottom="-40%" left="35%" />
      </Right>
    </HeroSection>
  );
};

export default Hero;
