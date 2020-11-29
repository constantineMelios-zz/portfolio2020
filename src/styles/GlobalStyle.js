import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --dark: #042439;
    --light: #FFFCFF;
    --blue: #3E78B2;
    --red: #F41101;
    --highlight: #D7CF07;
    --lighter: 300;
    --regular: 400;
    --bold: 600;
    --black: 900 ;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: var(--light);
    color: var(--dark);
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
