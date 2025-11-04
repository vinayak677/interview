import React, { useCallback, useEffect, useState } from 'react'
import Button from './Button';

const CallbackChild = () => {
    const[count,setCount] = useState(0);

    const increment=useCallback(()=>{
        setCount((prev)=> prev+1)
    },[])

    useEffect(()=>{
      console.log("useeffct increment")
    },[increment])

  return (
    <div>
        <p>count:{count}</p>
        <Button increment={increment}/>
    </div>
  )
}

export default CallbackChild;