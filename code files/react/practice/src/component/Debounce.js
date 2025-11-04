import React, { useEffect, useState } from 'react'

const Debounce = () => {
  const[name,setName]=useState("");
  const[debounceText,setDebounceText]=useState("");

  useEffect(()=>{
    let updated= setTimeout(()=>{
     setDebounceText(name)
    },300)
    return(()=>{
      clearTimeout(updated)
    })
  },[name])

  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Debounce:{debounceText}</p>
    </div>
  )
}

export default Debounce



// import React, { useEffect, useState } from 'react'

// const Debounce = () => {
//   const[name,setName]=useState("")
//   const[debounceText,setDebounceText]=useState("")

//   const fetchdata=async(query)=>{
//     try{

//       let resp= await fetch(`www.exmp.com/${query}`)
//       if(!resp.ok){
//         throw new Error(resp.status)
//       }
//       let data=await resp.json()
//       console.log(data)
//     }catch(error){
//      console.log(error.message)
//     }
//   }

//   useEffect(()=>{
//   let text= setTimeout(()=>{
//   setDebounceText(name);
//   fetchdata(name)
// },500)
// return(()=>{
//   clearTimeout(text)
// })
//   },[name])
  
//   return (
//     <div>
//       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
//       <h1>Text :{debounceText}</h1>
//     </div>
//   )
// }

// export default Debounce