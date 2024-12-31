import ButtonIcon from './ButtonIcon'
import { useDarkMode } from './context/DarkModeContext'

function DarkModeToggle() {
  const {} = useDarkMode()
  return <ButtonIcon></ButtonIcon>
}

export default DarkModeToggle
