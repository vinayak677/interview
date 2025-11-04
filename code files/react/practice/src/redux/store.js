
import {createSlice,configureStore} from "@reduxjs/toolkit"

// const countSlice=createSlice({
//   name:"count",
//   initialState:{count:0},
//   reducers:{
//     increse:(state)=>{
//      state.count += 1
//     },
//     decrese:(state)=>{
//       state.count -= 1
//      },
//     reset:(state)=>{
//       state.count = 0
//     }
//   }
 
// })

// export const {increse,decrese,reset}=countSlice.actions

// const store=configureStore({
//   reducer:{
//     count:countSlice.reducer
//   }
// })
// export default store ;

const initialState={name:"",age:""}
const formSlice= createSlice({
  name:"formData",
  initialState,
  reducers:{
    fieldUpdate:(state,action)=>{
       const {field,value}=action.payload
       state[field]=value
    },
    reset:()=>initialState
  }
})

export const {fieldUpdate,reset}= formSlice.actions

const store= configureStore({
  reducer:{
    formData : formSlice.reducer
  }
})
export default store