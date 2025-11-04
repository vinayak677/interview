import React, { createContext, useContext, useState } from 'react'


const createCount = createContext()

export const useCount=()=> useContext(createCount)
const CounterContext = ({children}) => {
  const[count,setCount]=useState(0);

  const increment=()=>{
   setCount(count+1)
  }
  const decrement=()=>{
  setCount(count-1)
  }

  return (
    <div>
      <createCount.Provider value={{count,increment,decrement}}>{children}</createCount.Provider>
    </div>
  )
}

export default CounterContext




// import { createContext, useContext, useState } from "react";

// const counterContext=createContext();

// export const useCounter=()=>useContext(counterContext)

// const CounterContext = ({children}) => {
//   const[count,setCount]=useState(0);

//   const increse=()=>{
//     setCount(count+1)
//   }
//   const decrese=()=>{
//     setCount(count-1)
//   }

//   return (
//     <counterContext.Provider value={{count,increse,decrese}}>{children}</counterContext.Provider>
//   )
// }

// export default CounterContext
