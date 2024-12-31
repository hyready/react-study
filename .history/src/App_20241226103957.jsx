import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter></BrowserRouter>
    </>
  )
}

export default App
