import styled from "styled-components";

const SectionContatos = styled.section`
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
  margin-bottom: 45px;
  justify-content: center;
  text-align: center;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 90px;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 40px;
    letter-spacing: 4px;
    color: #F0F8FF;
  }
`;

const Text = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-self: center;
  margin-top: 45px;
  width: 580px;
  text-align: center;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 22px;
    letter-spacing: 4px;
    color: #00A3FF;
    text-align: justify;
  }
`;


const Contatos = () => {

  return (
    <SectionContatos id="section-04">
    <Title>Contato</Title>
     <SubtitleWrapper>
        <p>Vamos conversar!</p>
      </SubtitleWrapper>
      <Text>
        <p>Tem um novo projeto em mente? Ou quer apenas dizer oi? Estou disponível para conversar e responder suas perguntas.</p>
      </Text>
    </SectionContatos>
  );
};

export default Contatos;