import { createContext, useState } from 'react'

function Fhzj() {
  return <div>复合组件</div>
}

function Counter({ children }) {
  const CountContext = createContext()
  const [count, setCount] = useState()

  function increase() {
    setCount(count => count + 1)
  }
  return (
    <CountContext.Provider>
      <span>{children}</span>
    </CountContext.Provider>
  )
}

function Count() {
  return <span></span>
}
export default Fhzj
