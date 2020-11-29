const { default: styled } = require('styled-components');

const ModeSelectorStyle = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  background: ${({ mode }) =>
    mode === 'light' ? 'var(--dark)' : 'var(--light)'};
  border: none;
  border-radius: 5rem;
  padding: 0.5em 0.75em;
  transition: background 0.15s ease;
  svg {
    width: 25px;
    height: 25px;
    color: ${({ mode }) => (mode === 'light' ? 'var(--light)' : 'var(--dark)')};
    transition: color 0.15s ease;
    transform: rotate(180deg);
  }
  :hover,
  :active,
  :focus {
    outline: none;
    svg {
      color: var(--highlight);
    }
  }
`;

export default ModeSelectorStyle;
