const { default: styled } = require('styled-components');

const LayoutStyle = styled.section`
  & > * {
    min-height: calc(100vh - 40px);
    @media (min-width: 1250px) {
      margin-left: 70px;
    }
  }
`;

export default LayoutStyle;
