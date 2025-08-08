import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  
  }
  ::-webkit-scrollbar {
    width: 0px;
  }

`;

export default GlobalStyle;
