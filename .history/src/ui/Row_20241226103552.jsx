import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  ${props => props.type === 'hor'}
`

function Row() {
  return <StyledRow>Row</StyledRow>
}

export default Row
