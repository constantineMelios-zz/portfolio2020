const { default: styled, keyframes } = require('styled-components');

const hoverAnimation = keyframes`
  25% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  50% {filter: drop-shadow(-1px 0px 0px var(--blue)) drop-shadow(1px 0px 0px var(--red));}
  75% {filter: drop-shadow(-3px 0px 0px var(--blue)) drop-shadow(3px 0px 0px var(--red));}
  100% {filter: none;}
`;

const SocialStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  a {
    color: var(--dark);
    padding: 0 1em;
    svg {
      width: 25px;
      margin: 0 auto;
      &:hover,
      &:active {
        animation: ${hoverAnimation} 1s 1;
      }
    }
  }
`;

export default SocialStyle;
