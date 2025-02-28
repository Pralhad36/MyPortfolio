import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' w-full font-bold bg-slate-400 p-2 flex justify-between'>
        <h1>Recipes</h1>
        <div className=' flex mx-4 w-2/6  justify-evenly '>
            <Link to={"/"}><p>Food List </p></Link>
         
            {/* <Link to={"/foodrecipe"}><p>FoodRecipe</p></Link> */}


            
        </div>
    </div>
  )
}

export default Navbar   