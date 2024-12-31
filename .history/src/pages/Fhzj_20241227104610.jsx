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
  return <button onClick={increase}>{icon}-</button>
}

function Decrease({ icon }) {
  const { decrease } = useContext(CountContext)
  return <button onClick={decrease}>{icon ? icon : '-'}</button>
}
function Label({ children }) {
  return <span>{children}</span>
}
export default Fhzj
