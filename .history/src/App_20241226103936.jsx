import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1></H1>
        <H1 as='h2'></H1>
        <Input as='input'></Input>
        <Button
          type='primary'
          size='big'
        >
          styled components
        </Button>
      </div>
    </>
  )
}

export default App
