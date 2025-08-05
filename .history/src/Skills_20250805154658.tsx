import styled from "styled-components";


const SectionSkills = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Skills = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre mim</Title>
     <SubtitleWrapper>
      <img src={Cerebro} alt="Cerebro Icon" />
        <p>Futura Engenheira de Software</p>
      </SubtitleWrapper>

         <MainContent>
        <ImageAndButton>
          <LargeImage src={MyImg} alt="Minha Foto" />
          <a href="./public/curriculo.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Ver Currículo</Button>
          </a>
        </ImageAndButton>

        <TextContent>
          <p>Apaixonada por desenvolvimento front-end e design, estou sempre em busca de aprender mais e transformar ideias em projetos reais.</p>
          <p>Curiosa, organizada e focada em criar interfaces que unam funcionalidade e boa experiência.</p>
          <p>Gosto de trabalhar em equipe e acredito que as melhores ideias nascem da colaboração entre pessoas interessadas.</p>
          <p>Fã de vôlei, animes (especialmente Haikyuu!!), videogames e, claro, de programar.</p>
        </TextContent>
      </MainContent>
      <LateralImg src={lateralImg} alt="Imagem lateral" />

    </SobremimSection>
  );
};

export default SobreMim;