// reverse string
const reverseString = (str) => {
  return str.split("").reverse().join("")
};
console.log(reverseString("javascript"));

// check number is prime
const isPrime = (num) => {
  if(num<2) return false
  for(let i=2;i*i<=num;i++){
    if(num%i===0){
      return false
    }
  }
  return true
}
console.log(isPrime(13));


const data23=(dat)=>{

  let charCount={}
  for(let item of dat){
    charCount[dat]=(charCount[item] || 0) + 1
  }
  return charCount
  }
  console.log(data23("kjhweraekfj"))

//find large
const largNum = (num) => {
  return Math.max(...num);
};
console.log(largNum([1, 2, 3, 4, 5, 6, 7, 8]));

const maxx = (num) => {
let max = num[0];
for(let i=1;i<num.length;i++){
  max= num[i] > max ? num[i] : max
}
return max
};
console.log(maxx([1, 3, 55, 7, 9, 44]));

// fibonacci
const fibonacci = (num) => {
let data=[0,1];
for(let i=2;i<num;i++){
  data.push(data[i-1]+data[i-2])
}
return data
};

console.log(fibonacci(5),"fabb");

// palindrome
const palidrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(palidrome("madam"));

// vowel count
const countVowel = (str) => {
const vowels="aeiou";
let count=0;
for(let i=0;i<str.length;i++){
 if(vowels.includes(str[i])){
   count++
 }
}
return count
};
console.log(countVowel("vinayak"));

// remove duplicate
const remDuplicate = (num) => {
  return num.filter((acc,val)=> num.indexOf(acc) === val)
};
console.log(remDuplicate([1, 2, 3, 4, 2, 3, 8, 5, 6, 7, 8]),"index");

//flatten arr
const flatten = (num) => {
  return num.reduce((acc,val)=> 
   Array.isArray(val)? acc.concat(flatten(val)):acc.concat(val),[]
  )
};
console.log(flatten([1, [2, [3, 4], 5]]),"flat");

// missing number
const missingNum = (num) => {
for(let i=0;i<num.length;i++){
  if(num[i+1]-num[i] > 1){
    return num[i]+1
  }
}
};
console.log(missingNum([7, 8, 10, 11]),"missed");
// find duplicate
const findDuplicate = (num) => {
  return num.filter((item, index) => num.indexOf(item) !== index);
  //   return [...new Set(num)];
};
console.log(findDuplicate([1, 2, 3, 2, 4, 5, 65, 4, 7, 33, 65]));

// merge sorted arr
const sorted = (a, b) => {
return [...a,...b].sort((a,b)=> a - b)
};
console.log(sorted([1, 3, 4], [6, 7, 9]),"sorted");

// Fahrenheit to Celsius

const ferCel = (fer) => ((fer - 32) * 5) / 9;
console.log(ferCel(98));

// intersection of 2 arr
const findInter = (a, b) => {
  return a.filter((num)=> b.includes(num))
}
console.log(findInter([1, 2, 3], [2, 3, 4]),"inersection");

// Check if Two Strings are Anagrams
const anagrams = (str1, str2) => {
 const anag= (str)=> str.split("").sort().join("")
 return anag(str1) === anag(str2)
};
console.log(anagrams("listen", "silent"),"anagram");

// ECMA2023
// findLast
const temp = [27, 28, 45, 30, 40, 42, 49, 35, 30];
let high = temp.findLast((x) => x > 40);

console.log(high,"high");
let highIndex = temp.findLastIndex((x) => x > 40);
console.log(highIndex,"highindex");

// toReversed
const months = ["Jan", "Feb", "Mar", "Apr"];
const reverseMonths = months.toReversed();
console.log(months);
console.log(reverseMonths);

// toSorted
const sorteds = months.toSorted();
console.log(sorteds);

// toSpliced
const spliced = months.toSpliced(0, 1);
console.log(spliced);

const week = ["monday", "tuesday", "wed", "thursday"];
// week[2] = "Wednesday";
// console.log(week);

// const chang = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "wed") {
//       str[i] = "wedn";
//     }
//   }
//   return str;
// };
// console.log(chang(week));

// with()
const updateWeeks = week.with(2, "Wedn");
console.log(updateWeeks);


let arr = [1, 3, -5, 5, 9, -9, -9];

function maxProduct(arr) {
  let currSum= arr[0];
  let maxSum=arr[0];
  for(let i=1;i<arr.length;i++){
    if(currSum < 0){
      currSum = arr[i];
      maxSum = maxSum > currSum ? maxSum : currSum
    }else{
      currSum += arr[i];
      maxSum = maxSum > currSum ? maxSum : currSum
    }
  }
  return maxSum
}
console.log(maxProduct(arr),"maxsum");

// fizzBuzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(15));

// is sorted
const isSorted = (num) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] > num[i + 1]) return false;
  }
  return true;
};
console.log(isSorted([1, 2, 3, 4, 5, 6, 7]));

// secLarge
const secLarge = (num) => {
let data= num.sort((a,b)=> a - b);
return data[data.length -1]
};
console.log(secLarge([1, 2, 12, 3, 4, 66, 7, 55]),"seclarge");

const numbers = [10, 20, 30];
// for of
for (let x of numbers) {x
  console.log(x * 2);
}
// for in
for (let x in numbers) {
  console.log("index", x, "values", numbers[x]);
}

const word = "hello";
for (let x of word) {
  console.log(x);
}

const person = { name: "vk", age: 25 };
for (let x in person) {
  console.log(x, person[x]);
}

const a = [1, 2, 3];
const b = a.filter((ele) => ele  * 2);
console.log(b);

// async function fetchData() {
//   try {
//     const response = await fetch("https://");
//     if (!response.ok) {
//       throw new Error(`${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fetchData();


// const fetchDAta=async()=>{
//  try{
//  const resp1= await fetch("htpps")
//  if(!resp1.ok){
//   throw new Error(`${resp1.status}`)
//  }
//  const data=await resp1.json()

//  const resp2= await fetch(`https://api.example.com/${data.id}`)
//  if(!resp2.ok){
//   throw new Error(`${resp2.status}`)
//  }
//  const data2=await resp2.json()
//  console.log(data2)
//  }catch(error){
//   console.log(error.message)
//  }
// }
// fetchDAta()


// function datas() {
//   fetch("")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return fetch(`htpp/:${data.id}`)
//         .then((resp2) => {
//           if (!resp2.ok) {
//             throw new Error(resp2.status);
//           }
//           return resp2.json();
//         })
//         .then((data2) => {
//           console.log(data2);
//           return data2;
//         })
//         .catch(error);
//     })
//     .catch(error);
// }
// datas();

//


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});

async function fetchData() {
  const val = await p1;
  console.log("hi");
  console.log(val);
}
fetchData();


// promise all
const get=async()=>{
try{
const [user,post]= await Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()),
  fetch("https://jsonplaceholder.typicode.com/posts").then((resp)=>resp.json())
])
console.log(user,post)
}catch(error){
  console.log(error.message)
}
}
// get2()


const get2=async()=>{
  try{
  const anyResp= await Promise.any([
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then((resp)=>resp.json())
  ])
  console.log(anyResp)
  }catch(error){
    console.log(error.message)
  }
  }
  // get2()


  // let a1=function (){
  //   console.log("hello a")
  // }

  // function b(a1){
  //   a1()
  // }
  // b(a1)


// shallow copy

let address= {name:"vinayak",address1:{city:"snk"}}

let shallow={...address}

shallow.name="vk"
shallow.address1.city="hebbal"
console.log(address)

// deep copy
let address3= {name:"vinayak",address1:{city:"snk"}}

let deep=JSON.parse(JSON.stringify(address3))
deep.name="vs"
deep.address1.city="bgm"
console.log(deep)

let dtd=(...data)=>{
return data
}
console.log(dtd(1,2,3,4))