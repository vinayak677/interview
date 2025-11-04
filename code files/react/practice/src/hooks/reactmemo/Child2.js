import React from 'react'

const Child2 = ({age}) => {
    console.log("inside child2")

  return (
    <div>Age:{age}</div>
  )
}

export default React.memo(Child2)