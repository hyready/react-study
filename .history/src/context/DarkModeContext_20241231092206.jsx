import { createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDark')

  function DarkModeToggle() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  useEffect(function () {}, [])
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
