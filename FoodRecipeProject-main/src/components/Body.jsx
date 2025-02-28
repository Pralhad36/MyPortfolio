import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Header from './Header'




const Body = () => {
  


  return (
      <div  >
          {/* <Navbar/> */}
          <Header/>
          <Outlet/>
   
    </div>
  )
}

export default Body