import { createContext, useContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {


  function 
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDark')

  return (
    <DarkModeContext.Provider value={{ isDarkMode }}>
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
