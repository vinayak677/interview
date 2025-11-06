const obje = {
    name: "vinayak",
    age: function() {
      console.log(this.name);
    },
  };
  let data = obje.age();
  console.log(data)
// call
const position={job:"FE"};
const printJob=function(name,age){
    console.log(name,age,this.job)
}
printJob.call(position,"vk","36")

// apply
const prinnt=function(age,name){
    console.log(age,name,this.job)
}
prinnt.apply(position,["33","gh"])

// bind 
const prr= function(age,name){
    console.log(age,name,this.job)
}
const aa=prr.bind(position,"30","vina")
aa()

