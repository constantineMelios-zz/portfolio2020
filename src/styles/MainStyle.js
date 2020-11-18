import styled, { keyframes } from 'styled-components'

const titleFirstAnimation = keyframes`
  0% { transform: translate3d(0, 200%, 0); opacity: 0;}
  40% { transform: translate3d(0, 100%, 0); opacity: 0;}
  60% { transform: translate3d(0, 100%, 0); opacity: 1;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`

const titleSecondAnimation = keyframes`
  0% { transform: translate3d(0, 100s%, 0); opacity: 0;}
  40% { transform: translate3d(0, 50%, 0); opacity: 0;}
  60% { transform: translate3d(0, 25%, 0); opacity: 1;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`

const contentAnimation = keyframes`
  0% { transform: translate3d(0, -50%, 0); opacity: 0;}
  100% { transform: translate3d(0, 0, 0); opacity: 1;}
`

const blueAnimation = keyframes`
  0%   { left:0; top:0 } 
  49%  { left:0; top:0 } 
	51%  { left:-3px; top:-3px; }  
  53%  { left:0; top:0 } 
  55%  { left:-3px; top:-3px; } 
  57%  { left:0; top:0 }
  59%  { left:-3px; top:-3px; } 
  61%  { left:0; top:0 }
	100% { left:0; top:0 }
`

const redAnimation = keyframes`
  0%   { left:0; top:0 } 
  49%  { left:0; top:0 } 
	51%  { left:3px; top:3px; }  
  53%  { left:0; top:0 } 
  55%  { left:3px; top:3px; } 
  57%  { left:0; top:0 }
  59%  { left:3px; top:3px; }
  61%  { left:0; top:0 }
	100% { left:0; top:0 }
`

const MainStyle = styled.main`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 1em;
  .main-side {
    flex: 1 1 max-content;
    margin: auto;
  }
  .main-title {
    font-size: 2.25rem;
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
        &:before{
          content:attr(data-text);
          display:block;
          width:100%;
          height:100%;
          position:absolute;
          left:0px;
          top:0;
          color:var(--blue);
          z-index:-1;
          animation: ${blueAnimation} 4s infinite;
          animation-delay: 1.5s;
        }
        &:after{
          content:attr(data-text);
          display:block;
          width:100%;
          height:100%;
          position:absolute;
          left:0;
          top:0;
          color:var(--red);
          z-index:-1;
          animation: ${redAnimation} 4s infinite;
          animation-delay: 1.5s;
        }
      }
    }
    @media(min-width: 1100px) {
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
  .main-content {
    width: max-content;
    padding: 0.50em 0;
    font-size: 1rem;
    font-weight: var(--light);
    height: 50%;
    overflow: hidden;
    opacity: 0;
    animation: ${contentAnimation} 0.5s forwards;
    animation-delay: 1.50s;
    transform: translate(0, -100%);
    @media(min-width: 1100px) {
      font-size: 1.25rem;
    }
  }
  .image-container {
    position: relative;
    .javascript {
      width: 250px;
      :hover {
        border: 1px solid red;
      }
    }
  }
`

export default MainStyle