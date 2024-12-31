import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import ButtonIcon from './ButtonIcon'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
  const { isDarkMode, DarkModeToggle } = useDarkMode()
  return (
    <ButtonIcon onClick={DarkModeToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}

export default DarkModeToggle
