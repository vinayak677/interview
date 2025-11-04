// reverse String

const reverseString=(str)=>{
return str.split().reverse().join()
}
console.log(reverseString("abcdefg"))

// check number is prime
const prime=(num)=>{
if(num < 2) return false
for(let i=2;i<num;i++){
    if(num % i=== 0){
        return false
    }
}
return true
}
console.log(prime(13))

// count letter
const charCount=(str)=>{
 let char={}
 for(let item of str){
    char[item] = (char[item] || 0) + 1
 }
 return char
}
console.log(charCount("kjdkqjwwd"))

// find large
const largNum=(num)=>{
let max=num[0];
for(let i=1;i<num.length;i++){
    max= num[i] > max ? num[i]: max
}
return max
}

console.log(largNum([1, 2, 3, 4, 5, 6, 7, 8]));

// fibonacci
const fibonacci = (num) => {
 let data=[0,1];
 for(let i=2;i<num;i++){
    data.push(data[i-1] + data[i-2])
 }
 return data
}
console.log(fibonacci(5));

// palindrome
const palindrome=(str)=>{
    return str== str.split("").reverse().join("")
}
console.log(palindrome("madam"));

// vowel count
const vowels=(str)=>{
 const vow='aeiou'
 let count=0;
 let newd=''
 for(let i=0;i<str.length;i++){
    if(vow.includes(str[i])){
       count++
       newd = newd+ str[i]
    }
 }
 return count,newd
}
console.log(vowels("vinayak"))


// remove duplicate
const remDuplicate=(data)=>{
    return data.filter((item,index)=> data.indexOf(item) !== index)
}
console.log(remDuplicate([1, 2, 3, 4, 2, 3, 8, 5, 6, 7, 8]),"index");


// flatten array
const flatten=(arr)=>{
 return arr.reduce((acc,val)=>
    Array.isArray(val)? acc.concat(flatten(val)): acc.concat(val),[]
)
}

console.log(flatten([1, [2, [3, 4], 5]]),"flat");

// missing number
const missing=(num)=>{
 for(let i=0;i<num.length;i++){
    if(num[i+1] - num[i] > 1){
        return num[i]+1
    }
 }
}
console.log(missing(7, 8, 10, 11))


// merge sorted
const sorted=(a,b)=>{
  return [...a,...b].sort((a,b)=> b - a)
}

console.log(sorted([1, 3, 4], [6, 7, 9]),"sorted");

// 
const findInter=(a,b)=>{
 return a.filter((num)=> b.includes(num))
}
console.log(findInter([1, 2, 3], [2, 3, 4]),"inersection");

// findlast
const temp = [27, 28, 45, 30, 40, 42, 49, 35, 30];

let high= temp.findLast((x)=> x > 40)
console.log(high)

// toReversed
const months = ["Jan", "Feb", "Mar", "Apr"];
const reverse=months.toReversed()
console.log(reverse)
console.log(months)

// slice
let sliced=months.slice(1,3)
console.log(sliced)  // Feb,Mar

// splice
const month = ["Jan", "Mar","dec","May"];
let spliced= month.splice(2,1,"Apr")
console.log(spliced)
console.log(months)


// maxSum
const maxProduct=(arr)=>{
 let maxSum= arr[0];
 let currSum=arr[0];
 for(let i=1;i<arr.length;i++){
    if(currSum < 0){
      currSum=arr[i]
      maxSum= maxSum > currSum ? maxSum : currSum
    }else{
      currSum +=arr[i]
      maxSum= maxSum > currSum ? maxSum : currSum
    }
 }
 return maxSum
}
console.log(maxProduct([1, 3, -5, 5, 9, -9, -9]),"maxsum");


// fizzBuzz
const fizzBuzz=(num)=>{
 for(let i=1;i<=num;i++){
    if( i % 3=== 0 && i % 5 === 0){
        console.log("fizzBuzz") 
    }else if(i % 3 ===0){
        console.log("fizz") 
    } else if( i % 5=== 0){
        console.log("buzz") 
    } else{
        console.log(i) 
    }
 }
}
console.log(fizzBuzz(15))

// promise

let p1= new Promise((res,rej)=>{
    setTimeout(()=>{
      res("1")
    },2000)
})

async function fetchData(){
    let p2= await p1
    console.log("2");
    console.log(p2)
}
fetchData()

// promise all

const get=async()=>{
 try{
   const[name,post]= await Promise.all([
    fetch("").then((resp)=>resp.json()),
    fetch("").then((resp)=>resp.json())
   ])
   console.log(name,post)
 }catch(error){
    console.log(error)
 }
}

// promise any

const get1= async()=>{
    try{
        const anyone =await Promise.any([
            fetch('').then((resp)=>resp.json()),
            fetch('').then((resp)=>resp.json())
        ])
        console.log(anyone)
    }catch(error){
       console.log(error)
    }
}

// shallow
let address= {name:"vk", address:{city:"snk"} }

let shallow= {...address}

shallow.name="vk1"
shallow.address.city="snk1"
console.log(address)
console.log(shallow)


// deep
let address1= {name:"pk",address:{city:'bgm'}}

let deep= JSON.parse(JSON.stringify(address1));

deep.name="pk1"
deep.address.city="bgm1"
console.log(address1)
console.log(deep)