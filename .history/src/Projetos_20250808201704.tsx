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
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  justify-content: center;

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
  margin-top: 40px;
  margin-bottom: 20px;

  h3 {
    font-size: 25px;
    font-family: "Racing Sans One", sans-serif;
    color: #FFBB1B;
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #FFFFFF;
  text-align: justify;
  font-style: italic;
  line-height: 1.4;
  letter-spacing: 0.2px;
  margin: 0;
`;

const WorkType = styled.span`
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #56C9F4;
  text-align: justify;
  font-style: italic;
  line-height: 1.4;
  letter-spacing: 0.2px;
  margin-top: 15px;
`;

const Projetos = () => {

    const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 370; // largura do card + gap, ajuste se precisar
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }

  };

  const projetos = [
    {
      nome: "Recriação do IFOOD",
      link: "https://www.figma.com/proto/nUuJj1rOCC76iw6qILdZ6z/IEMGAMES?node-id=121-427&node-type=CANVAS&t=ijGoINF4dtZrPuml-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=121%3A427",
      imagem: "/src/assets/projetos_ifood.svg",
      logo: "/src/assets/projetos_ifood-logo.svg",
      descricao: "Nova proposta visual para o site do iFood, focando em organização e modernização da interface.",
      tipo: "Trabalho acadêmico."
    },
    {
      nome: "IEM Games",
      link: "https://example.com",
      imagem: "/src/assets/projetos_iem-games.svg",
      logo: "/src/assets/projetos_iem-games-logo.svg",
      descricao: "Landing page estática para uma plataforma de jogos, com design moderno e navegação intuitiva.",
      tipo: "Trabalho acadêmico."
    },
    {
      nome: "Musik",
      link: "https://example.com",
      imagem: "/imagens/projeto3.jpg",
      logo: "/imagens/logo3.png",
      descricao: "Breve descrição do projeto 3.",
      tipo: "Trabalho acadêmico."
    },

    {
      nome: "Musik",
      link: "https://example.com",
      imagem: "/imagens/projeto3.jpg",
      logo: "/imagens/logo3.png",
      descricao: "Breve descrição do projeto 3.",
      tipo: "Trabalho acadêmico."
    },
    
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
                <img src={proj.logo} 
                alt={`Logo ${proj.nome}`} 
                
                style={{
                  width: "50px",
                  height: 
                  proj.nome === "Recriação do IFOOD" ? "26px" :
                  proj.nome === "IEM Games" ? "50px" :
                  proj.nome === "Musik" ? "50px" :
                  "auto",
                }}
                
              
                
                />
                <h3>{proj.nome}</h3>
              </ProjectHeader>
              <Description>{proj.descricao}</Description>
              <WorkType>{proj.tipo}</WorkType>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </SectionProjetos>
  );
};

export default Projetos;