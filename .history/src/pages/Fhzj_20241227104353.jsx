import { createContext, useContext, useState } from 'react'

function Fhzj() {
  return <div>复合组件</div>
}
const CountContext = createContext()
function Counter({ children }) {
  const [count, setCount] = useState()

  function increase() {
    setCount(count => count + 1)
  }

  function decrease() {
    setCount(count => count - 1)
  }
  return (
    <CountContext.Provider value={{ increase, decrease, count }}>
      <span>{children}</span>
    </CountContext.Provider>
  )
}

function Count() {
  const { count } = useContext(CountContext)
  return <span>{count}</span>
}

function Increase({ icon }) {
  const { increase } = useContext(CountContext)
  return <span onClick={increase}>{icon}</span>
}

function Decrease({ icon }) {
  const { decrease } = useContext(CountContext)
  return <span onClick={decrease}>{icon}</span>
}
function Label({ children }) {
  return children
}
export default Fhzj
