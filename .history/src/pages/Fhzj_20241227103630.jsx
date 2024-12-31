import { createContext } from 'react'

function Fhzj() {
  return <div>复合组件</div>
}

function Counter({ children }) {
  const CountContext = createContext()
const []
  return (
    <CountContext.Provider >
      <span>{children}</span>
    </CountContext.Provider>
  )
}

function Count() {
  return <span></span>
}
export default Fhzj
