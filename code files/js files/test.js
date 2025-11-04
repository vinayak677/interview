export const fetchData=async()=>{
    const response= await fetch("");
    const json= response.json()
    return json
}

import {fetchData} from "./api"

global.fetch= jest.fn(()=>
  Promise.resolve({
      json :()=> Promise.resolve({data:"mockd data"})
  })
)

test("fetched succses",async()=>{
    const data=await fetchData();
    expect(data).toEqual({data:"mocked data"})
})

