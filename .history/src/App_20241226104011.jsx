import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
import { BrowserRouter, Routes } from 'react-router'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  )
}

export default App
