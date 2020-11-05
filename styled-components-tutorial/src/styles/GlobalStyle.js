import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --dark: #02111B;
    --light: #FFFCFF;
    --blue: #3E78B2;
    --red: #F41101;
    --highlight: #D7CF07;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`

export default GlobalStyle