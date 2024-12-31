import { createContext, useState } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState()

  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>
}

export { DarkModeProvider }
