import styled from 'styled-components'

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
    padding: 0.50em 0;
    font-size: 1rem;
    font-weight: var(--light);
    @media(min-width: 1100px) {
      font-size: 1.25rem;
    }
  }
  .image-container {
    position: relative;
    min-width: 500px;
    min-height: 100vh;
    .javascript {
      position: absolute;
      top: 0;
      left: 1em;
      :hover {
        border: 1px solid red;
      }
    }
  }
`

export default MainStyle