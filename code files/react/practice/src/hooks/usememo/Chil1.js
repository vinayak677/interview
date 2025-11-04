import React,{useMemo} from 'react'

const Chil1 = ({car,price}) => {

    const disc=useMemo(()=>{
    console.log("discount")
      return price-500
    },[price])

  return (
    <div>
        <p>car:{car}</p>
        <p>price:{price}</p>  
        <p>Discount:{disc}</p>
    </div>
  )
}


export default Chil1