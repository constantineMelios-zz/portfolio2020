import styled from 'styled-components';

const HeaderStyle = styled.header`
  width: 70px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  border-right: 1px solid var(--dark);
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
  }
  div {
    align-self: flex-end;
  }
`;

export default HeaderStyle;
