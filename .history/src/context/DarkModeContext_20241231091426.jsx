import { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>
}

export { DarkModeProvider }
