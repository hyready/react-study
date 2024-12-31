import { createContext, useState } from 'react'
import { }=useLocal
  
  
const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>
}

export { DarkModeProvider }
