import styled from 'styled-components'
import ButtonIcon from './ButtonIcon'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import SpinnerMini from './SpinnerMini'
import Logout from './Logout'

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`

function Header() {
  const { logout, isLoading } = useLogout()
  return (
    <StyledHeader>
      <Logout></Logout>
    </StyledHeader>
  )
}

export default Header
