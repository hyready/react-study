import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
const types = {
  primary: css`
    background-color: blue;
  `
}
const Button = styled.button`
  ${props => types[props.type]}
  ${props =>
    props.size === 'big' &&
    css`
      width: 40%;
      height: 50%;
      color: red;
    `}
  padding: 10px;
  margin: 4px;
  &:hover {
    background-color: yellow;
  }
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--color-grey-600);
`
const H1 = styled.h1`
  font-size: 24px;
  line-height: 1.5;
  background-color: pink;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
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
