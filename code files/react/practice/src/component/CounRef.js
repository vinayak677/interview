  import React, { useRef, useState } from 'react'

  const CounRef = () => {
    const countRef=useRef(0)
    const[count,setCount]= useState(0);

    const increase=()=>{
    countRef.current ++
    setCount(countRef.current)
    }
    const decrease=()=>{
    countRef.current --
    setCount(countRef.current)
    }

    return (
      <div>
        <p>count: {count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

      </div>
    )
  }

  export default CounRef





















  // import React, { useRef, useState } from 'react'

  // const CounRef = () => {
  //     const countref=useRef(0);
  //     const[count,setCount]=useState(0);

  //     const increment=()=>{
  //     countref.current +=1
  //     setCount( countref.current)
  //     }
  //     const decrement=()=>{
  //         countref.current -=1
  //         setCount( countref.current)
  //     }

  //   return (
  //     <div>
  //         <p>count : {count}</p>
  //         <button onClick={increment}>increment</button>
  //         <button onClick={decrement}>decrement</button>
  //     </div>
  //   )
  // }

  // export default CounRef