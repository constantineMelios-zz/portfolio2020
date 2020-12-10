import { darkTheme, lightTheme } from './ThemesStyles';

const { default: styled } = require('styled-components');

const LayoutStyle = styled.section`
  ${({ mode }) => (mode === 'light' ? lightTheme : darkTheme)}
  & > * {
    margin-top: 70px;
    min-height: calc(100vh - 110px); //70header  40footer
    @media (min-width: 1250px) {
      margin-left: 70px;
    }
    @media (min-width: 880px) {
      margin-top: 0;
      min-height: calc(100vh - 40px);
    }
  }
`;

export default LayoutStyle;
