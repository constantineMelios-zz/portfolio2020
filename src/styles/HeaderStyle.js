import styled, { keyframes } from 'styled-components';

const entranceAnimation = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
`;

const hoverAnimation = keyframes`
  25% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  50% {filter: drop-shadow(-1px 0px 0px var(--blue)) drop-shadow(1px 0px 0px var(--red));}
  75% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  100% {filter: none;}
`;

const HeaderStyle = styled.header`
  width: 70px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  border-right: 1px solid var(--dark);
  animation: ${entranceAnimation} 0.5s backwards;
  animation-delay: 3s;
  svg {
    width: 50px;
    height: 50px;
    margin: 1em auto;
    align-self: flex-start;
  }
  nav {
    flex: 1 1 80%;
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
      padding: 0 1em;
      :hover,
      :active {
        animation: ${hoverAnimation} 1s 1;
      }
      svg {
        width: 35px;
        height: 35px;
        margin: 0 auto;
      }
    }
  }
  div {
    align-self: flex-end;
  }
`;

export default HeaderStyle;
