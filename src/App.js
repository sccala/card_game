import { Button, ButtonLabel } from './components/button.styles'
import { StyledButton } from './components/button.styles'
import { AppContainer } from './components/container.styles'
import {GlobalStyles} from './GlobalStyles.styles.js'

function App() {
  return (
    <>
      <AppContainer>
        <GlobalStyles />
        <StyledButton ButtonLabel="click me" backgroundColor="violet"></StyledButton>
      </AppContainer>
    </>
  )
}

export default App
