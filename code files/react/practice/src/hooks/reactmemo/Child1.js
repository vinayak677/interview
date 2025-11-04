import React from 'react'

const Child1 = ({name}) => {
    console.log("inside child1")
  return (
    <div>name:{name}</div>
  )
}

export default React.memo(Child1);