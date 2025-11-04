import React from 'react'
import Message from './Message'
import WithBorder from './WithBorder'

let Coc=WithBorder(Message)
const BorderMess = () => {
  return (
    <div>
      <Coc/>
    </div>
  )
}

export default BorderMess