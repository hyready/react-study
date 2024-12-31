import { createContext } from 'react'

function Fhzj() {
  return <div>复合组件</div>
}

function Counter({ children }) {
  const CountContext = createContext()
  return <span>{children}</span>
}

function Count() {
  return <span></span>
}
export default Fhzj
