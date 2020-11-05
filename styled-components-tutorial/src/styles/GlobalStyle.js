import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`

export default GlobalStyle