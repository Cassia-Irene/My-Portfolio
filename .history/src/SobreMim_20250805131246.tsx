import styled from "styled-components";
import Cerebro from "./assets/cerebro-sm.svg";
import MyImg from "./assets/my-img.svg";

const SobremimSection = styled.section`
  height: 100vh;
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
  margin-bottom: 72px;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 35px;
    color: #00A3FF;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const LargeImage = styled.img`
  width: 297px;
  height: 309px;
  border-radius: 50px;
  box-shadow: inset 0px 4px 10px 0.25px rgba(255, 255, 255, 0.25);
`;

const TextContent = styled.div`
  max-width: 670px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    line-height: 1.5;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #F0F8FF;
    max-width: 100%;
    letter-spacing: 1px;
  }

`;

const Button = styled.button`
  width: 226px;
  height: 50px;
  padding: 30px 20px;
  margin-top: 40px;
  line-height: 1.6;
  background-color: transparent;
  color: white;
  font-family: "Racing Sans One", sans-serif;
  font-size: 25px;
  border: solid 4px #FFBB1B;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #FFBB1B;
  }
`;

const ImageAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
     <SubtitleWrapper>
      <img src={Cerebro} alt="Cerebro Icon" />
        <p>Futura Engenheira de Software</p>
      </SubtitleWrapper>

         <MainContent>
        <ImageAndButton>
          <LargeImage src={MyImg} alt="Minha Foto" />
          <Button>Ver Currículo</Button>
        </ImageAndButton>

        <TextContent>
          <p>Apaixonada por desenvolvimento front-end e design, estou sempre em busca de aprender mais e transformar ideias em projetos reais.</p>
          <p>Curiosa, organizada e focada em criar interfaces que unam funcionalidade e boa experiência.</p>
          <p>Gosto de trabalhar em equipe e acredito que as melhores ideias nascem da colaboração entre pessoas interessadas.</p>
          <p>Fã de vôlei, animes (especialmente Haikyuu!!), videogames e, claro, de programar.</p>
        </TextContent>
      </MainContent>

    </SobremimSection>
  );
};

export default SobreMim;
