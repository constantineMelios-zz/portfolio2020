import styled, { keyframes } from 'styled-components';
import { darkTheme, lightTheme } from './ThemesStyles';

const entranceAnimation = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
`;

const logoAnimation = keyframes`
0% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
100% {filter: drop-shadow(-1px 0px 0px var(--blue)) drop-shadow(1px 0px 0px var(--red));}
`;

const HeaderStyle = styled.header`
  ${({ mode }) => (mode === 'light' ? lightTheme : darkTheme)}
  width: 70px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  border-right: ${({ mode }) =>
    mode === 'light' ? '1px solid var(--dark)' : '1px solid var(--light)'};
  animation: ${entranceAnimation} 0.5s backwards;
  animation-delay: ${({ path }) => (path === '/' ? '1.5s' : '0s')};
  padding: 1em 0;
  transition: transform 0.25s ease;
  @media (max-width: 1250px) {
    width: 100%;
    height: 70px;
    flex-wrap: no-wrap;
    border: none;
    border-bottom: ${({ mode }) =>
      mode === 'light' ? '1px solid var(--dark)' : '1px solid var(--light)'};
    padding: 0 1em;
  }
  @media (max-width: 880px) {
    transform: translateX(-100%);
  }
  .logo {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    align-self: flex-start;
    animation: ${logoAnimation} 0.25s infinite;
    @media (max-width: 1250px) {
      align-self: center;
    }
  }
  div {
    align-self: flex-end;
    @media (max-width: 1250px) {
      align-self: center;
    }
  }
`;

export default HeaderStyle;
