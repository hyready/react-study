import styled from 'styled-components'
import { useDarkMode } from './context/DarkModeContext'

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`

function Logo() {
  const { isDarkMode } = useDarkMode()
  let src = isDarkMode ? '' : ''
  return (
    <StyledLogo>
      <Img
        src={src}
        alt='Logo'
      />
    </StyledLogo>
  )
}

export default Logo
