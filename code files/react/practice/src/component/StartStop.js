// import React, { useState } from 'react'

// const StartStop = () => {

//   const[count,setCount]=useState(0);
//   const[intervalId,setIntervalId]=useState(null);

//   const handleChange=(type)=>{
//     if(intervalId) return
//     let id=setInterval(()=>{
//       setCount((pre)=>(type === "increse"? pre+1 : pre-1))
//     },1000)
//     setIntervalId(id);
//   }

//   const hanldePause=()=>{
//     if(intervalId){
//       setIntervalId(null)
//       clearInterval(intervalId)
//     }
//   }

  

//   return (
//     <div>
//       <p>count:{count}</p>
//       <button onClick={()=>handleChange("increse")}>Increse</button>
//       <button onClick={()=>handleChange("decrese")}>Decrese</button>
//       <button onClick={hanldePause}>Pause</button>
//     </div>
//   )
// }

// export default StartStop


import React from 'react'

export function App(props){
  const[count,setCount] = React.useState(0);
  const[intervalId,setIntervalId] = React.useState(null);

  const handleChange=(type)=>{
    if(intervalId) return null;
    let id= setInterval(()=>{
       setCount((pre)=> type === "increase" ? pre + 1 : pre - 1)
    },1000)
    setIntervalId(id)
  }


  return (
    <div>
      <p>count :{count}</p>
      <button onClick={()=>handleChange("increase")}>Increase</button>
      <button onClick={()=>handleChange("decrease")}>Decrease</button>
    </div>
  )
}

