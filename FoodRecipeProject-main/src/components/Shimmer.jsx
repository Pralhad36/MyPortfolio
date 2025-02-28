import React from 'react'

const Shimmer = () => {
  return (
   <div className=' flex flex-wrap justify-center '>
    {Array(24).fill(0).map((card, i) =>  <div key={i} className='flex justify-center shadow-lg w-60 h-96 border-2 m-2 p-2 border-black'>
    <div className=' bg-slate-300  w-56 h-64'></div>
</div>)}
   </div>

  )
}

export default Shimmer

