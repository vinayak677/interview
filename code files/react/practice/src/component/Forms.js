import React, { useState } from 'react'

const Forms = () => {
const[item,setItem] = useState({ name:"",age:"",country:""})

const handleChange=(e)=>{
  const{name,value}=e.target
  setItem((pre)=>({
    ...pre,
    [name]:value
  }))
} 

const handleForm=(e)=>{
 e.preventDefault();
console.log(item)
setItem({
  name:"",
  age:"",
  country:""
})
}

  return (
      <form onSubmit={handleForm} className='flex flex-col  gap-2 border w-1/3 justify-center justify-self-center'>
        <div className='flex flex-col bg-gray-500 gap-2 justify-center py-5'>
        <div className='flex gap-2 justify-center '>
         <p className='text-xl font-bold '>name: </p>
         <input  name="name" className='border rounded-md' value={item.name} type='text' placeholder='name' onChange={handleChange}/>
        </div>
        <div className='flex gap-2  justify-center'>
         <p className='text-xl font-bold '>age: </p>
         <input name='age' className='border rounded-md' value={item.age} type='text' placeholder='age' onChange={handleChange}/>
        </div>
        <div className='flex gap-2  justify-center'>
         <p className='text-xl font-bold '>country: </p>
         <input name='country' className='border rounded-md' value={item.country} type='text' placeholder='country' onChange={handleChange}/>
        </div>
        <div className='flex justify-center mt-5'>
        <button className='border border-gray-950 p-1 rounded-lg bg-slate-500 text-red-800' type='submit'>submit</button>
        </div>
        </div>
      </form>
  )
}

export default Forms


// const Forms=()=>{
//  const[name,setName] = useState("");
//  const[age,setAge]= useState();

//  const handleSubmit=async(e)=>{
//    e.preventDefault();
//   try{
//     const resp= await fetch("https:examl.com",{
//      method:"POST",
//      body:JSON.stringify({name,age}),
//      headers:{"Content-Type":"application/json"}
//     })
//     if(!resp.ok){
//      throw new Error(resp.status)
//     }
//     const data=await resp.json()
//     console.log(data)
//   }catch(error){
//    console.log(error.message)
//   }
//  }
// return(
//   <div>
//   <form onSubmit={handleSubmit}>

//    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
//    <input type='nuber' value={age} onChange={(e)=>setAge(e.target.value)}/>
//    <button type='submit'>submit</button>
//   </form>
//   </div>
// )
// }
// export default Forms