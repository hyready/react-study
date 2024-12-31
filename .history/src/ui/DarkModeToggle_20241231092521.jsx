import ButtonIcon from './ButtonIcon'
import { useDarkMode } from './context/DarkModeContext'

function DarkModeToggle() {
  const { isDarkMode, DarkModeToggle } = useDarkMode()
  return <ButtonIcon></ButtonIcon>
}

export default DarkModeToggle
