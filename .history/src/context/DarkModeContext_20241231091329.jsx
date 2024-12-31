import { createContext } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  return <DarkModeContext.Provider></DarkModeContext.Provider>
}

export default DarkModeContext
