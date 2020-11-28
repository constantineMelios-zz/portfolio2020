import styled from 'styled-components';

const HeaderStyle = styled.header`
  width: 60px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid var(--dark);
  svg {
    width: 50px;
    height: 100vh;
  }
`;

export default HeaderStyle;
