import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import ButtonIcon from './ButtonIcon'
import SpinnerMini from './SpinnerMini'
import useLogout from '../features/authentication/useLogout'

function Logout() {
  const { logout, isLoading } = useLogout()
  return (
    <ButtonIcon
      disabled={isLoading}
      onClick={logout}
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}

export default Logout
