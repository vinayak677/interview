import React,{lazy, Suspense} from 'react'

const Home= lazy(()=>import("./CounRef"))

const Suspenses = () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <Home/>
    </Suspense>
  )
}

export default Suspenses
