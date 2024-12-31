import { createContext, useContext, useState } from 'react'

function Fhzj() {
  return (
    <div>
      <Counter>
        <Counter.label>测试复合组件的label</Counter.label>
      </Counter>
    </div>
  )
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

Counter.Count = Count
Counter.Increase = Increase
Counter.Decrease = Decrease
Counter.Label = Label

export default Fhzj
