import React from 'react'
import { useCounter } from './CounterContext'

const Countter = () => {
  const{count,increase,decrease}=useCounter()
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increase}>increse</button>
      <button onClick={decrease}>decrese</button>
    </div>
  )
}

export default Countter