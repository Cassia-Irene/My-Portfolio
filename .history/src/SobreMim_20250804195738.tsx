import styled from "styled-components";

const SobreMim-section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 122px;
  position: relative;
  gap: 107px;
`;

const Title = styled.h1`
  font-size: 120px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFFFFF;
  letter-spacing: 8px;
  position: relative;
  margin-top: -23px;
  left: 40%;
`;

const Sobremim = () => {

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
        <LateralImg src={lateralImg} alt="Imagem lateral" />
      </Left>

      {/* Lado Direito */}
      <Right>
        <CentralImg src={centralImg} alt="Principal" />
        <FloatingImg src={img1} top="-22%" left="45%" />
        <FloatingImg src={img2} top="-35%" right="-65%" />
        <FloatingImg src={img3} bottom="-50%" left="65%" />
        <FloatingImg src={img4} bottom="-40%" right="-70%" />
      </Right>
    </HeroSection>
  );
};



export default Sobremim;
