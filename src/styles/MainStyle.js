import styled from 'styled-components'

const MainStyle = styled.main`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  .main-side {
    flex: 0 1 50%;
    margin: auto;
  }
  .main-title {
    width: max-content;
    font-size: 2.25rem;
    line-height: 1.09em;
    font-weight: var(--bold);
    @media(min-width: 1100px) {
      font-size: 3.5rem;
    }
  }
  .main-content {
    width: max-content;
    padding: 0.25em 0;
    font-size: 1.1rem;
    font-weight: var(--light);
  }
  .image-container {
    position: relative;
  }
`

export default MainStyle