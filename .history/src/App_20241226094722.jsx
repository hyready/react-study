import styled, { css } from 'styled-components'

const types = {
  primary: css`
    background-color: blue;
  `
}
const Button = styled.button`
  ${props => types[props.type]}
  background-color: red;
  padding: 10px;
  margin: 4px;
`

function App() {
  return (
    <div>
      <Button type='primary'>styled components</Button>
    </div>
  )
}

export default App