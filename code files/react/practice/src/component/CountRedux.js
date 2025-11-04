import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrese, increse,reset } from '../redux/store'

const CountRedux = () => {
  const count = useSelector((state)=>state.count.count)
  const dispatch=useDispatch()
  return (
    <div>
      <p>count :{count}</p>
      <button onClick={()=>dispatch(increse())}>increse</button>
      <button onClick={()=>dispatch(decrese())}>decrese</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default CountRedux