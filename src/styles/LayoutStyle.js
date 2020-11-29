const { default: styled } = require('styled-components');

const LayoutStyle = styled.section`
  & > * {
    @media (min-width: 1250px) {
      margin-left: 70px;
    }
  }
`;

export default LayoutStyle;
