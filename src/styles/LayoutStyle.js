import { darkTheme, lightTheme } from './ThemesStyles';

const { default: styled } = require('styled-components');

const LayoutStyle = styled.section`
  ${({ mode }) => (mode === 'light' ? lightTheme : darkTheme)}
  & > * {
    min-height: calc(100vh - 40px);
    @media (min-width: 1250px) {
      margin-left: 70px;
    }
  }
`;

export default LayoutStyle;
