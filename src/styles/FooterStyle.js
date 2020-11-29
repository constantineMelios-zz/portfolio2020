import styled from 'styled-components';
import { darkTheme, lightTheme } from './ThemesStyles';

const FooterStyle = styled.footer`
  ${({ mode }) => (mode === 'light' ? lightTheme : darkTheme)}
  margin: auto;
  padding: 1em;
  height: 40px;
  text-align: center;
  font-size: 0.8em;
  a {
    color: inherit;
    margin-left: 0.25rem;
    :hover,
    :active {
      font-style: italic;
    }
  }
`;
export default FooterStyle;
