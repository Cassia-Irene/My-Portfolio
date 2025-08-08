import styled from "styled-components";


const SectionSkills = styled.section`
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

const TextContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  margin-top: 10px;

  p {
    line-height: 1.5;
    leter-spacing: 1px;
    font-family: "Inter", sans-serif;
    text-align: justify;
    font-size: 20px;
    font-weight: 500;
    color: #F0F8FF;
    max-width: 100%;
  }

`;

const LinkedinLink = styled.a`
    color: #FFBB1B;
    text-decoration: none;
    position: relative;

    &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: #FFBB1B;
    }

`;

const GridWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto;
`;

const SkillText = styled.p`
  font-family: "Inter", sans-serif;
  color: #F0F8FF;
  font-size: 16px;
  text-align: center;
`;

const Skills = () => {

  return (
    <SectionSkills id="section-02">
        <Title>Skills & Habilidades</Title>

        <TextContent>
          <p>Meu principal foco está no desenvolvimento front-end (lado do cliente da web).</p>
          <p>Possuo conhecimento em desenvolvimento front-end, com familiaridade em HTML, CSS e Javascript. Estou em fase de aprendizado e desenvolvimento de habilidades na criação de aplicações web avançadas, incluindo o desenvolvimento de layouts interativos e personalizados. Utilizo o Figma para design UI/UX e possuo conhecimentos básicos em Python. Atualmente, estou expandindo meu aprendizado com o estudo de React.</p>
          <p>Visite meu <LinkedinLink href="https://www.linkedin.com/in/cassia-irene/" target="_blank" rel="noopener noreferrer">Linkedin</LinkedinLink> para mais detalhes.</p>
        </TextContent>

        <GridWrapper>
          {/* Primeira linha de skills */}
          <GridRow>
            <SkillImage src="./assets/skills" alt="HTML" />
            <SkillImage src="/skills/css.png" alt="CSS" />
            <SkillImage src="/skills/js.png" alt="JavaScript" />
          </GridRow>
          <GridRow>
            <SkillText>HTML5</SkillText>
            <SkillText>CSS3</SkillText>
            <SkillText>JavaScript</SkillText>
          </GridRow>

          {/* Segunda linha de skills */}
          <GridRow>
            <SkillImage src="/skills/react.png" alt="React" />
            <SkillImage src="/skills/figma.png" alt="Figma" />
            <SkillImage src="/skills/python.png" alt="Python" />
          </GridRow>
          <GridRow>
            <SkillText>React</SkillText>
            <SkillText>Figma</SkillText>
            <SkillText>Python</SkillText>
          </GridRow>
        </GridWrapper>

    </SectionSkills>
  );
};

export default Skills;