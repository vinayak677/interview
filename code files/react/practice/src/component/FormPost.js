import React, { useState } from "react";

const FormPost = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });
    
  const handleChange = (e) => {
    const {name,value}= e.target
    setFormData((pre)=>({
      ...pre,
      [name]:value
    }))
  };


  const fetchDta = async () => {
    try{
     let resp=await fetch("www",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name:formData.name,age:formData.age})
     })
     if(!resp.ok){
      throw new Error(resp.status)
     }
     let data=await resp.json()
     console.log(data)
    }catch(error){
      console.log(error.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDta();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormPost;
