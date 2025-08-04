import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
    
  ::-webkit-scrollbar-thumb {
    background-color: #FFBB1B;
    border: 2.5px solid #FFBB1B;
  }

`;

export default GlobalStyle;
