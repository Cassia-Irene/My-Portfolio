import styled from "styled-components";

const SobremimSection = styled.section`
  height: 100%;
  padding: 0 122px;
  margin: 0 auto;
  
`;

const Title = styled.h2`
  text-align: center;
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 15%;
  
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
    </SobremimSection>
  );
};



export default SobreMim;
