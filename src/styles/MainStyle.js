import styled, { keyframes } from 'styled-components';

const titleFirstAnimation = keyframes`
  0% { transform: translate3d(0, 200%, 0); opacity: 0;}
  40% { transform: translate3d(0, 100%, 0); opacity: 0;}
  60% { transform: translate3d(0, 100%, 0); opacity: 1;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`;

const titleSecondAnimation = keyframes`
  0% { transform: translate3d(0, 100s%, 0); opacity: 0;}
  40% { transform: translate3d(0, 50%, 0); opacity: 0;}
  60% { transform: translate3d(0, 25%, 0); opacity: 1;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`;

const contentAnimation = keyframes`
  0% { transform: translate3d(0, -50%, 0); opacity: 0;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`;

const buttonAnimation = keyframes`
  0% {opacity: 0;}
  80% {opacity: 0;}
  100% {opacity: 1;}
`;

const hoverAnimation = keyframes`
  5% {transform: translateX(0) translateY(0) rotate(0)}
  15% {transform: translateX(0) translateY(0) rotate(-15deg)}
  30% {transform: translateX(0) translateY(0) rotate(15deg)}
`;

const blueAnimation = keyframes`
  49%  { left:0;} 
	52%  { left:-3px;}  
  55%  { left:0;} 
  58%  { left:-3px;} 
  61%  { left:0;}
  64%  { left:-3px;} 
  67%  { left:0;}
`;

const redAnimation = keyframes`
  49%  { left:0;} 
	52%  { left:3px;}  
  55%  { left:0;} 
  58%  { left:3px;} 
  61%  { left:0;}
  64%  { left:3px;} 
  67%  { left:0;}
`;

const MainStyle = styled.main`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 2em;
  @media (min-width: 1250px) {
    margin-left: 70px;
  }
  .main__side {
    flex: 0 1 max-content;
  }
  .main__title {
    font-size: 2rem;
    line-height: 1.09em;
    font-weight: var(--bold);
    position: relative;
    span {
      display: block;
      height: 50%;
      overflow: hidden;
      width: 100%;
      &#first {
        animation: ${titleFirstAnimation} 0.5s forwards;
        transform: translate(0, 300%);
      }
      &#second {
        opacity: 0;
        transform: translate(0, 100%);
        animation: ${titleSecondAnimation} 0.5s forwards;
        animation-delay: 0.5s;
        &:before {
          content: attr(data-text);
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0;
          color: var(--blue);
          z-index: -1;
          animation: ${blueAnimation} 4s infinite;
          animation-delay: 1.5s;
        }
        &:after {
          content: attr(data-text);
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          color: var(--red);
          z-index: -1;
          animation: ${redAnimation} 4s infinite;
          animation-delay: 1.5s;
        }
      }
    }
    @media (min-width: 1100px) {
      font-size: 3.5rem;
    }
    :after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: var(--dark);
    }
  }
  .main__content {
    width: max-content;
    padding: 0.5em 0;
    font-size: 1rem;
    font-weight: var(--lighter);
    height: 50%;
    overflow: hidden;
    opacity: 0;
    animation: ${contentAnimation} 0.5s forwards;
    animation-delay: 1.5s;
    transform: translate(0, -100%);
    @media (min-width: 1100px) {
      font-size: 1.25rem;
    }
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5em 1em;
    margin: 0.75em;
    margin-left: 0;
    display: inline-block;
    transition: color 0.5s ease, background 0.5s ease;
    animation: ${buttonAnimation} 2.5s backwards;
    @media (min-width: 1100px) {
      font-size: 1.25rem;
    }
    &.main__primary-button {
      color: var(--light);
      border: 1px solid var(--blue);
      background: var(--blue);
      transition: border 0.5s ease, color 0.5s ease, background 0.5s ease;
      :hover,
      :active {
        border: 1px solid var(--highlight);
        color: var(--blue);
        background: var(--highlight);
      }
    }
    &.main__secondary-button {
      color: var(--red);
      background: none;
      border: 1px solid var(--red);
      transition: border 0.5s ease, color 0.5s ease, background 0.5s ease;
      :hover,
      :active {
        background: var(--red);
        color: var(--light);
        border: 1px solid var(--light);
      }
    }
  }

  .image-container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    :hover {
      svg {
        animation: ${hoverAnimation} 1s 1;
      }
    }
    svg {
      z-index: 1;
    }
    .react {
      width: 125px;
      transform: translateX(70%) translateY(60%) rotate(-15deg);
    }
    .redux {
      width: 75px;
      transform: translateX(100%) translateY(60%) rotate(15deg);
    }
    .html {
      width: 70px;
      transform: translateX(-110%) translateY(115%) rotate(5deg);
    }
    .gatsby {
      width: 90px;
      transform: translateX(100%) translateY(80%) rotate(-8deg);
    }
    .javascript {
      z-index: 0;
      width: 250px;
    }
    .git {
      width: 125px;
      transform: translateX(-50%) translateY(15%) rotate(-8deg);
    }
    .styled-components {
      width: 70px;
      transform: translateX(125%) translateY(-120%) rotate(-8deg);
    }
    .css {
      width: 125px;
      transform: translateX(30%) translateY(-30%) rotate(8deg);
    }
    .sass {
      width: 80px;
      transform: translateX(-110%) translateY(-20%) rotate(-12deg);
    }
    .tailwind {
      width: 40px;
      transform: translateX(320%) translateY(-325%) rotate(-12deg);
    }
  }
`;

export default MainStyle;
