import React from 'react'
import { useCounter } from './CounterContext'

const Countter = () => {
  const{count,increse,decrese}=useCounter()
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increse}>increse</button>
      <button onClick={decrese}>decrese</button>
    </div>
  )
}

export default Countter


// import React, { useContext } from 'react'
// import { useCounter } from './CounterContext'

// const Countter = () => {
//     const {count,increse,decrese}= useCounter()

//   return (
//     <div>
//         <p>Count : {count}</p>
//         <button onClick={increse}>increse</button>
//         <button onClick={decrese}>decrese</button>
//     </div>
//   )
// }

// export default Countter