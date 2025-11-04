import React, { useEffect, useState } from 'react'

const Timer = () => {
  const[time,setTime]=useState(0);
  const[isRunning,setIsRunning]=useState(false)

  useEffect(()=>{
   let times;
   if(isRunning){
    times = setInterval(()=>{
          setTime((pre)=> pre+10)    
    },10)
   }
   return(()=>{
    clearInterval(times)
   })
  },[isRunning])

  const clockTimer=(tim)=>{
  let min= Math.floor(tim/60000)
  let sec= Math.floor((tim%60000)/1000)
  let milSec = Math.floor((tim%1000)/10)
  return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}:${milSec.toString().padStart(2,"0")}`
  }

  return (
    <div>
      <p>{clockTimer(time)}</p>
      <button onClick={()=>{setIsRunning(!isRunning)}}>{isRunning?"stop":'start'}</button>
      <button onClick={()=>{setIsRunning(false);setTime(0)}}>reset</button>
    </div>
  )
}

export default Timer



// import React, { useEffect, useState } from 'react'

// const Timer = () => {
//   const[timer,setTimer]=useState(0);
//   const[isRunning,setIsRunning]=useState(false);

//   useEffect(()=>{
//     let time;
//   if(isRunning){
//   time=setInterval(()=>{
//     setTimer((pre)=>pre+10)
//   },10)
//   }
//   return(()=>{
//     clearInterval(time)
//   })
//   },[isRunning])

//   const clocker=(mil)=>{
//   const min=Math.floor(mil/60000);
//   const sec=Math.floor((mil%60000)/1000);
//   const milSec=Math.floor((mil%1000)/10);

//   return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}:${milSec.toString().padStart(2,"0")}:`
//   }

//   return (
//     <div>
//       <h1>{clocker(timer)}</h1>
//       <button onClick={()=>setIsRunning(!isRunning)}>{isRunning?"Stop":"Start"}</button>
//       <button onClick={()=>{setTimer(0);setIsRunning(false)}}>Reset</button>
//     </div>
//   )
// }

// export default Timer