import styled from "styled-components";
import LightRays from "./components/LightRays";

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
  return (
    <HeroSection id="section-00">

      {/* ===== LightRays como fundo ===== */}
      <div
        className="absolute top-28 md:top-0 max-sm:top-36 max-[480px]:top- inset-x-0 -z-10 md:opacity-80 sm:opacity-60 max-sm:opacity-40"
        >
        
        <LightRays
          raysOrigin="top-center"
          raysColor="#25A9D6"
          raysSpeed={1}
          lightSpread={1}
          rayLength={4}
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
