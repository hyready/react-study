import styled, { css } from 'styled-components'

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${props => props === 'h2'}
`

export default Heading
