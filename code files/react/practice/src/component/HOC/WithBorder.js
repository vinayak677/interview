import React from 'react'

const WithBorder = (Wrapped) => {
    return(props)=>{
        return (
          <div style={{border:"2px solid red"}}>
            <Wrapped {...props}/>
          </div>
        )
    }
}

export default WithBorder















// import React from 'react'

// const WithBorder = (Wrapped) => {
//     return (props)=>{
//         return (
//           <div style={{border:"2px solid red"}}>
//               <Wrapped {...props}/>
//           </div>
//         )
//     }
// }

// export default WithBorder