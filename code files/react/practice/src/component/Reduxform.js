import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fieldUpdate, reset } from '../redux/store'

const Reduxform = () => {
   const formData= useSelector((state)=>state.formdata)
   const dispatch=useDispatch()

    const handleChange=(e)=>{
      const {name,value}=e.target
      dispatch(fieldUpdate({field:name,value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(reset())
        console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={formData?.name} onChange={handleChange}/>
        <input type='text' name='age' value={formData?.age} onChange={handleChange}/>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Reduxform
