import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
