
    let numbers=[1,2,3,4,5];

    let result = numbers.map((data)=> data * 2)
    console.log(result)


    // call
     let job ={ role :"frontend"};

     let result2= function({name,age}){
     console.log(name,age,this.role)
     }

     result2.call(job,{name:"vinayak",age:30})

     let arr =[1, [2, [3, , [4, [5]]]]];

     let answers=(data)=>{
      return data.reduce((acc,val)=>
        Array.isArray(val) ? acc.concat(answers(val)) : acc.concat(val) , []
    )
     }
     console.log(answers(arr))


    //  const changeName=(data)=>{
    //  const oldName= "giving";
    //  const newName="taking";
    //  const result = "";
    //  for(let i=0;i<data.length;i++){
    //     if(data.slice(i, i+oldName.length)=== oldName){
    //         result += newName;
    //         i += oldName.length -1
    //     }else{
    //         result += data[i]
    //     }
    //  }
    //  return result
    //  }
    //  console.log(changeName("im giving interview"))

    //  module.export(changeName)
