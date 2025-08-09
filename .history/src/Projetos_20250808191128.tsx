import styled from "styled-components";

const SectionProjetos = styled.section`
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
  margin-bottom: 14px;
  
`;

const Carousel = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 350px;
  height: 541px;
  background: rgba(0, 70, 121, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const ImageWrapper = styled.a`
  position: relative;
  width: 350px;
  height: 248.5;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
    filter: brightness(40%);
  }

  &:hover img {
    filter: brightness(100%);
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;

  img {
    width: 50px;
    height: 26px;
  }

  h3 {
    font-size: 25px;
    font-family: "Racing Sans One", sans-serif;
    color: #FFBB1B;
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #f0f8ff;
  text-align: justify;
  decoration: italic;
  line-height: 1.4;
  letter-spacing: 0.2px;
  margin: 0;
`;

const Projetos = () => {
  const projetos = [
    {
      nome: "Recriação do IFOOD",
      link: "https://example.com",
      imagem: "/src/assets/projetos_ifood.svg",
      logo: "/src/assets/projetos_ifood-logo.svg",
      descricao: "Nova proposta visual para o site do iFood, focando em organização e modernização da interface."
    },
    {
      nome: "Projeto 2",
      link: "https://example.com",
      imagem: "/imagens/projeto2.jpg",
      logo: "/imagens/logo2.png",
      descricao: "Breve descrição do projeto 2."
    },
    {
      nome: "Projeto 3",
      link: "https://example.com",
      imagem: "/imagens/projeto3.jpg",
      logo: "/imagens/logo3.png",
      descricao: "Breve descrição do projeto 3."
    }
  ];

  return (
    <SectionProjetos id="section-03">
      <Title>Projetos</Title>
      <Carousel>
        {projetos.map((proj, index) => (
          <Card key={index}>
            <ImageWrapper href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.imagem} alt={proj.nome} />
            </ImageWrapper>
            <CardContent>
              <ProjectHeader>
                <img src={proj.logo} alt={`Logo ${proj.nome}`} />
                <h3>{proj.nome}</h3>
              </ProjectHeader>
              <Description>{proj.descricao}</Description>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </SectionProjetos>
  );
};

export default Projetos;