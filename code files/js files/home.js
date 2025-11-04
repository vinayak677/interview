let test = [
  {
    id: "test-id-1",
    name: "test-name-1",
    type: "test-type-1",
    group: [
      {
        id: "test-id-1-1",
        name: "test-name-1-1",
        type: "test-type-1-1",
        group: [
          {
            id: "test-id-1-1-1",
            name: "test-name-1-1-1",
            type: "test-type-1-1-1",
            group: [
              // there will be more test objectsḍ
            ],
          },
        ],
      },
      {
        id: "test-id-1-2",
        name: "test-name-1-2",
        type: "test-type-1-2",
        group: [
          {
            id: "test-id-1-2-1",
            name: "test-name-1-2-1",
            type: "test-type-1-2-1",
            group: [
              // there will be more test objects
            ],
          },
        ],
      },
    ],
  },
  {
    id: "test-id-2",
    name: "test-name-2",
    type: "test-type-2",
    group: [
      {
        id: "test-id-2-1",
        name: "test-name-2-1",
        type: "test-type-2-1",
        group: [
          {
            id: "test-id-2-1-1",
            name: "test-name-2-1-1",
            type: "test-type-2-1-1",
            group: [
              // there will be more test objects
            ],
          },
        ],
      },
      {
        id: "test-id-2-2",
        name: "test-name-2-2",
        type: "test-type-2-2",
        group: [
          {
            id: "test-id-2-2-1",
            name: "test-name-2-2-1",
            type: "test-type-2-2-1",
            group: [
              // there will be more test objects
            ],
          },
        ],
      },
    ],
  },
];

const getAllNames = (data,names= new Set()) => {
for(let item of data){
  names.add(item.name)
  if(item.group && item.group.length > 0){
    getAllNames(item.group, names)
  }
  return Array.from(names)
}
}
console.log(getAllNames(test));


// count the total object
const countObj = (data) => {
  let count= 0;
  for(let item of data){
    count++
    if(item.group && item.group.length > 0){
      count = count + countObj(item.group)
    }
  }
  return count
};
console.log(countObj(test));

// find by id
const findById = (data, Id) => {
for(let item of data){
  if(item.id === Id){
    return item
  }
  if(item.group && item.group.length > 0){
    let dats= findById(item.group,Id)
    if(dats) return dats
  }
}
};
console.log(findById(test, "test-id-2-1-1"));



const pal=(data)=>{
const upd = data.toLowerCase().split("").filter((dat)=> /[a-z0-9]/.test(dat))
return upd.join("") == upd.reverse().join("")
}
console.log(pal("C1 O$d@eeD o1c"));


function getuser(userId,callback){
  setTimeout(()=>{
  callback({id:userId,name:"john"})
  },1000)
}

function getPost(user,callback){
  setTimeout(()=>{
    console.log(`${user.name}`)
    callback(["post 1","post 2"])
  },1000)
}

function getcomment(post,callback){
  setTimeout(()=>{
    console.log(`${post}`)
    callback(["cmt1","cmt2"])
  },1000)
}

getuser(1,function(user){
  getPost(user, function post(){
    getcomment(post[0],function(comments){
      console.log(comments)
    })
  })
})