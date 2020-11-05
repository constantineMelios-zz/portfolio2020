import styled from 'styled-components'

const MainStyle = styled.main`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  .main-side {
    flex: 1 1 50%;
    text-align: center;
    min-width: max-content;
  }
  .image-container {
    position: relative;
  }
`

export default MainStyle