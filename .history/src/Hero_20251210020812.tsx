import styled from "styled-components";
import LightRays from "./components/LightRays";
import { useEffect, useState } from "react";

/* ---------------------------------------------------------
   SECTION (mantida apenas para mostrar a LightRays no fundo)
--------------------------------------------------------- */
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
`;

/* ---------------------------------------------------------
   COMPONENT
--------------------------------------------------------- */
const Hero = () => {
  const [originOffset, setOriginOffset] = useState(0.2);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 480) setOriginOffset(0.04);     // mobile pequeno -> empurra a origem pra baixo mais (menos negativo)
      else if (w < 768) setOriginOffset(0.1); // tablet pequeno
      else if (w < 1024) setOriginOffset(0.30); // tablet maior
      else setOriginOffset(0.2);               // desktop
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <HeroSection id="section-00">

      {/* ===== LightRays como fundo ===== */}
      <div
        className="absolute inset-x-0 -z-10 h-full">
        
        <LightRays
          raysOrigin="top-center"
          raysColor="#25A9D6"
          raysSpeed={1}
          lightSpread={1}
          rayLength={4}
          originOffset={originOffset}
          pulsating={true}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.2}
          className="custom-rays"
        />
      </div>

      {/* ======== TODO O RESTO FOI COMENTADO ======== */}

      {/*
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

      <Right>
        <CentralImg src={centralImg} alt="Principal" />
        <FloatingImg src={img1} $top="-22%" $right="150%" />
        <FloatingImg src={img2} $top="-35%" $left="30%" />
        <FloatingImg src={img3} $bottom="-60%" $right="130%" />
        <FloatingImg src={img4} $bottom="-40%" $left="35%" />
      </Right>
      */}

    </HeroSection>
  );
};

export default Hero;
