import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import ButtonIcon from './ButtonIcon'
import SpinnerMini from './SpinnerMini'

function Logout() {
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
