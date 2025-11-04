import React, { useState } from 'react'

const Range = () => {
    const[range,setRange] = useState(0);

  return (
    <div>
        <input value={range} type='range' min={0} max={100} onChange={(e)=>setRange(e.target.value)}/>
        <p>{range}%</p>
    </div>
  )
}

export default Range