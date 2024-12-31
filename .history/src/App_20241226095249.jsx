import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
const types = {
  primary: css`
    background-color: blue;
  `
}
const Button = styled.button`
  ${props => types[props.type]}

  padding: 10px;
  margin: 4px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--);
`

function App() {
  return (
    <>
      <div>
        <Button type='primary'>styled components</Button>
      </div>
    </>
  )
}

export default App
