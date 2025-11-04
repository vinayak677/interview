


import React, { useState } from 'react'

const Todo = () => {
  const[name,setName]=useState("");
  const[todos,setTodos]=useState([])
  const[editingIndex,setEditingIndex]=useState(null)
  const[editingText,setEditingText]=useState("")

  const handleSubmit=()=>{
    if(name.trim()){
      setTodos([...todos,name])
      setName("")
    }
  }

  const handleDelete=(index)=>{
    const data= todos.filter((_,i)=> i !==index);
    setTodos(data)
  }

  const handleSave=(index)=>{
   const updated=[...todos];
   updated[index]= editingText.trim();
   setTodos(updated)
   setEditingIndex(null)
   setEditingText("")
  }
  const handleCancel=()=>{
    setEditingIndex(null)
    setEditingText("")
  }

  const hanldeEdit=(index)=>{
  setEditingIndex(index)
  setEditingText(todos[index])
  }

  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map((dat,index)=>(
          <li key={index}>
            {editingIndex === index ? (
              <>
              <input type='text' value={editingText} onChange={(e)=>setEditingText(e.target.value)}/>
              <button onClick={()=>handleSave(index)}>save</button>
              <button onClick={handleCancel}>cancel</button>

              </>
              ):(
              <>
            {dat} 
            <button onClick={()=>hanldeEdit(index)}>Edit</button>s
            <button onClick={()=>handleDelete(index)}>delete</button>
              </>
              )}
              </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo