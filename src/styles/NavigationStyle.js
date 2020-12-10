import styled, { keyframes } from 'styled-components';

const hoverAnimation = keyframes`
  25% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  50% {filter: drop-shadow(-2px 0px 0px var(--blue)) drop-shadow(2px 0px 0px var(--red));}
  75% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  100% {filter: none;}
`;

const NavigationStyle = styled.nav`
  width: max-content;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 0.7rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    transition: opacity 0.25s ease, text-decoration 0.25s ease;
    :hover,
    :active {
      animation: ${hoverAnimation} 1s 1;
    }
    &.disabled {
      cursor: default;
      animation: none;
      opacity: 0.7;
      text-decoration: underline;
    }
    svg {
      width: 35px;
      height: 35px;
      margin: 0 auto;
    }
  }
`;

export default NavigationStyle;
