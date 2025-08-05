import styled from "styled-components";

const SobremimSection = styled.section`
  height: 100vh;

  justify-content: space-between;
  align-items: center;
  padding: 0 122px;
  gap: 107px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
    </SobremimSection>
  );
};



export default SobreMim;
