// check number is prime
const isPrime = (num) => {
if (num < 2) return false;
for(let i=2;i*i<=num;i++){
    if(num% i===0){
        return false;
    }
}
return true
}
console.log(isPrime(13));

const nameCount=(data)=>{
let charCount={}
for(let item of data){
  charCount[item]= (charCount[item] || 0) + 1
}
return charCount
}

console.log(nameCount("kjhweraekfj"));


// find lasrger
const large=(num)=>{
// return Math.max(...num)  
let max= num[0]
for(let i=1;i<num.length;i++){
  max=num[i] > max ? num[i]: max   
}
return max
}
console.log(large([1, 2, 3, 4, 5, 6, 7, 8]));

// fabonacci
let fabinocci=(num)=>{
    let data=[0,1];
    for(let i=2;i<num;i++){
        data.push(data[i-1]+data[i-2])
    }
    return data
}
console.log(fabinocci(7))

// palindrome
let palindrome=(str)=>{
    return str === str.split("").reverse().join("")
}
console.log(palindrome("madam"))

// vowel count
let vowelCount=(str)=>{
    let vowel="aeiou";
    let count=0
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
           count= count+1
        }
    }
    return count
}
console.log(vowelCount("vinayak"))

// remove duplicate
const removeDuplicate=(num)=>{
    return num.filter((acc,val) => num.indexOf(acc) === val)
}
console.log(removeDuplicate([1,1,2,3,4,5,3,2,6,7]))

// flatten
  const flatten=(arr)=>{
       return arr.reduce((acc,val)=>{
           return Array.isArray(val) ? acc.concat(flatten(val)): acc.concat(val) 
       },[])
    }
console.log(flatten([1,2,[3,[4],[6]]]))

// missing
  const missingNumber=(num)=>{
      for(let i=0;i<num.length;i++){
          if(num[i+1] - num[i] > 1){
              return num[i]+1
          }
      }
  }
console.log(missingNumber([1,2,4,5,6,7]))


// sorted
const sorted=(a,b)=>{
    return [...a,...b].sort((c,d)=> c-d)
}
console.log(sorted([1,2,3],[53,8,7]))

// farenheit to celsius
const farCeli=(far)=>{
    return ((far - 32) * 5) / 9
}
console.log(farCeli(27))

// find last index
let findlast=(num)=>{
    return num.findLastIndex((item)=> item=== 7)
}
console.log(findlast([22,3,3,5,3,2,5,6,7,833,5,66,77]))


// fecth async await
 const fetchdata=async()=>{
     try{
         let resp=await fetch("https://");
         if(!resp.ok){
             throw new Error(`${resp.status}`)
         }
         let data = await resp.json()
         let resp2= await fetch(`https:${data.id}`)
         if(!resp2.ok){
             throw new Error(`${resp2.status}`)
         }
         const data2= await resp2.json()
         console.log(data)
         return data
     }catch(error){
         console.log(error.message)
     }
 }
fetchdata();

// .then catch
function fecthData(){
    fetch("https")
    .then((resp)=>{
        if(!resp.ok){
            throw new Error(`${resp.status}`)
        }
        return resp.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error.message)
    })
}


// call after 5 sec both 
// 2 , 1
let id= new Promise((res,rej)=>{
    setTimeout(()=>{
        res("1")
    },1000)
})

async function fetchdatas(){
    let respData= await id
    console.log("2")
    console.log(respData)
}
fetchdatas()


// promise all
let allData = async () => {
    try {
        const [id, user] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1").then((resp1) => resp1.json()),
            fetch("https://jsonplaceholder.typicode.com/users/1").then((resp2) => resp2.json()),
        ]);
        console.log(id, user);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

allData();


// promise any
let anyOne = async () => {
    try {
        let getData = await Promise.any([
            fetch("https://jsonplaceholder.typicode.com/posts/1").then((resp) => resp.json()),
            fetch("https://jsonplaceholder.typicode.com/users/1").then((resp2) => resp2.json())
        ]);
        console.log(getData);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

anyOne();


// deep copy
let vinAddress = { name: "vinayak", address: { city: "snk" } };
let deep = JSON.parse(JSON.stringify(vinAddress));  // Deep copy

deep.name = "vk";
deep.address.city = "sv";

console.log(deep);       // { name: 'vk', address: { city: 'sv' } }
console.log(vinAddress); // { name: 'vinayak', address: { city: 'snk' } } ← unchanged ✅


// shallow copy
let vinAddress1 = { name: "vinayak", address: { city: "snk" } };
let shallow = { ...vinAddress1 };  // Shallow copy

shallow.name = "vk";
shallow.address.city = "sv";

console.log(shallow);       // { name: 'vk', address: { city: 'sv' } }
console.log(vinAddress1);   // { name: 'vinayak', address: { city: 'sv' } } ← changed ❌



// this
const obj={
    name:"vinayak",
    age:function(){
        console.log(this.name)
    }
}
const data=obj.age()


const position={job:"FE"}; 

// call
const printJob=function(name,age){
    console.log(name,age,this.job)
}
printJob.call(position,"vk","36")

// apply
const prinnt=function(age,name){
    console.log(age,name,this.position)
}
prinnt.apply(position,["33","gh"])

// bind
const prr= function(age,name){
    console.log(age,name,this.position)
}
const aa=prr.bind(position,"30","vina")
aa() // "30 vina FE"


// callback function

let date=(callback)=>{
    console.log("hello")
    let call=callback()
    console.log(call)
}

let first=()=>{
    return "good bye"
}

date(first)