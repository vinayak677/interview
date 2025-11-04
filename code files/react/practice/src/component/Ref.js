import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
  const[count,setCount]= useState(0);

  const prevRef= useRef(null);

  useEffect(()=>{
    prevRef.current =count
  },[count])

  return (
    <div>
      <p>count:{count}</p>
      <p>prev: {prevRef.current}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Ref


// import React, { useRef } from 'react'

// const Ref = () => {
//   const nameRef=useRef(null);

//   const handleref=()=>{
//     if(nameRef.current){

//       console.log(nameRef.current.value)
//     }
//   }

//   return (
//     <div>
//       <input type='text' ref={nameRef}/>
//       <button onClick={handleref}>submit</button>
//     </div>
//   )
// }

// export default Ref


