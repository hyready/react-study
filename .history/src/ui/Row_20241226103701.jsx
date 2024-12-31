import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  ${props =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
`

function Row() {
  return <StyledRow>Row</StyledRow>
}

export default Row
