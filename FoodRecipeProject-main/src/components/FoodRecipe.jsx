import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import Shimmer from './Shimmer'
import { auth } from '../../utils/firebase'

const FoodRecipe = () => {
  const [listRecipes, setListRecipes] = useState()
  const [inputValue, setInputValue] = useState()
  const [searchInput, setSearchInput] = useState()
  const[foodList, setFoodList] = useState()
  const[buttonToggle, setButtonToggle] = useState(false)
      const [currentPage, setCurrentPage] = useState(3)

      const LIMIT = 10

  const getDrinks = async () => {
   try {
    const res = await fetch('https://dummyjson.com/recipes?limit='+ LIMIT + '&skip='+ currentPage*LIMIT )
    const data = await res.json()
    setListRecipes(data.recipes)
    setFoodList(data.recipes)
   } catch (error) {
    console.error(error)
   }

  }

  const handleBackButton = () => {
    setFoodList(listRecipes)
  }

  const handleSortButton = async() => {
    try {
      
      const data =  await fetch(buttonToggle? 'https://dummyjson.com/recipes?sortBy=name&order=asc': 'https://dummyjson.com/recipes?sortBy=name&order=desc') 
      
    const res = await data.json()
    setFoodList(res.recipes)
    setButtonToggle(!buttonToggle)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClick = async() => {
    try {
      const data = await fetch('https://dummyjson.com/recipes/search?q='+inputValue)
    const res = await data.json()

    setFoodList(res.recipes)
    
    } catch (error) {
      console.error(error.message)
    }
  }
  console.log(searchInput)
  console.log(listRecipes)

  console.log(inputValue)
  useEffect(() => {
    getDrinks()
  },[currentPage])


  
    const logoutHandler = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };
  return (
    !listRecipes ? <Shimmer/> :
    <div className='md:mt-10 mt-15'>
      <div className=' w-full flex flex-wrap justify-center '>
        <input type='string' value={inputValue} onChange={(e) => setInputValue( e.target.value.toLowerCase()) } className=' md:w-4/12 w-8/12 border-black border p-2 m-2 rounded-lg'></input>
        <button onClick={handleClick} className=' bg-slate-200 m-2 text-xs md:text-base rounded-lg px-4'>Search</button>
        <button onClick={handleBackButton} className=' bg-slate-200  py-1 text-xs md:text-base m-2 rounded-lg  px-4 my-2'>Back</button>
        <button onClick={handleSortButton} className=' bg-slate-200 text-xs md:text-base m-2 rounded-lg  px-4'>{buttonToggle? "Sort by A-Z": "Sort by Z-A"}</button>
        {/* <button
              onClick={logoutHandler}
              className=" bg-red-600 font-bold hover:bg-red-500 text-white px-4 my-2  rounded-lg"
            >
              logout
            </button> */}

      </div>
    <div className=' flex flex-wrap justify-center  }'> 
        {foodList&& foodList.map (recipe => <FoodCard data={recipe}/> ) }
    </div>
    <div className=' flex justify-center my-4 cursor-pointer' > 
            
        { currentPage > 0 && <span onClick={ () => setCurrentPage((currentPage) => currentPage - 1)}>Prev</span>}
                {[...Array(5).keys()].map(pN => <span onClick={() => {setCurrentPage(pN)} } className={' px-2 cursor-pointer' + (pN === currentPage && " font-bold text-lg underline")} key={pN}>{pN + 1}</span>)}

                { currentPage < 5 - 1 && <span onClick={ () => setCurrentPage((currentPage) => currentPage + 1)}>Next</span>}

        </div>

    </div>
  )
}

export default FoodRecipe