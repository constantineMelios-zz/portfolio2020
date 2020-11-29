import styled from 'styled-components';

const FooterStyle = styled.footer`
  margin: auto;
  padding: 1em;
  height: 40px;
  text-align: center;
  font-size: 0.8em;
  a {
    color: inherit;
    margin-left: 0.25rem;
    :hover,
    :active {
      font-style: italic;
    }
  }
`;
export default FooterStyle;
