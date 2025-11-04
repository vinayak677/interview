
// curring
function outer(outerVal){
    return function inner(innerVal){
        return outerVal+innerVal
    }
}
console.log(outer(2)(3))

function pare(a){
    return function child(b){
        console.log(a,b)
    }
}
const data=pare(2)
console.log(data(3))

const close=()=>{
    let a =10;
    const check=()=>{
        console.log(a)
    }
    check()
}
close()


const datas={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }}

    const {name,address, address:{street}} = datas
    console.log(name,address,street)


    for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
    