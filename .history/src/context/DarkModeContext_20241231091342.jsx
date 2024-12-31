import { createContext } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>
}

export { DarkModeProvider }
