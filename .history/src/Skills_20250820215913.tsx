import styled from "styled-components";
import skills1 from "./assets/svg_skills1.svg";
import skills2 from "./assets/svg_skills2.svg";
import skills3 from "./assets/svg_skills3.svg";
import skills1 from "./assets/svg_skills4.svg";
import skills1 from "./assets/svg_skills5.svg";
import skills1 from "./assets/svg_skills6.svg";


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
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 130px;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin: 0 auto;
`;

const SkillText = styled.p`
  font-family: "Inter", sans-serif;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
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
            <SkillImage src={skills1} />
            <SkillImage src="/src/assets/svg_skills2.svg" alt="Figma" />
            <SkillImage src="/src/assets/svg_skills3.svg" alt="HTML 5" />
          </GridRow>
          <GridRow>
            <SkillText>CSS 3</SkillText>
            <SkillText>Figma</SkillText>
            <SkillText>HTML 5</SkillText>
          </GridRow>

          {/* Segunda linha de skills */}
          <GridRow>
            <SkillImage src="/src/assets/svg_skills4.svg" alt="Python" />
            <SkillImage src="/src/assets/svg_skills5.svg" alt="Figma" />
            <SkillImage src="/src/assets/svg_skills6.svg" alt="Visual Studio" />
          </GridRow>
          <GridRow>
            <SkillText>Python</SkillText>
            <SkillText>JavaScript</SkillText>
            <SkillText>Visual Studio</SkillText>
          </GridRow>
        </GridWrapper>

    </SectionSkills>
  );
};

export default Skills;