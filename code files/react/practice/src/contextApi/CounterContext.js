import { createContext, useContext, useState } from "react";

const counterContext=createContext();

export const useCounter=()=>useContext(counterContext)

const CounterContext = ({children}) => {
  const[count,setCount]=useState(0);

  const increase=()=>{
    setCount(count+1)
  }
  const decrease=()=>{
    setCount(count-1)
  }

  return (
    <counterContext.Provider value={{count,increase,decrease}}>{children}</counterContext.Provider>
  )
}

export default CounterContext
