import { createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDark')

  function DarkModeToggle() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode')
        document.documentElement.classList.remove('light-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
        document.documentElement.classList.add('light-mode')
      }
    },
    [isDarkMode]
  )
  return (
    <DarkModeContext.Provider value={{ isDarkMode, DarkModeToggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === 'undefined') throw new Error('在DarkModeContext之外使用')
  return context
}
export { DarkModeProvider, useDarkMode }
