import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FoodCard = ({data}) => {
  const navigate = useNavigate()

  const [resDetail, setResDetail] = useState()

  const {image,id,name,rating,cuisine,prepTimeMinutes,servings,difficulty} = data

  // const getRecipeDetail = async() => {
  //   const data = await fetch("https://dummyjson.com/recipes/"+ userId)
  //   const res = await data.json()
  //   setResDetail(res)
  //   navigate("/recipeDetail")
  // }
  
  // console.log(resDetail)
  return (
    
    <div onClick={() => {navigate("/recipeDetail/" + id)}} className='rounded-3xl  bg-white md:w-60 w-40 flex flex-col shadow-lg cursor-pointer p-2 m-2 transform transition-transform duration-300 hover:scale-95'>
        <img className=' rounded-3xl' src={image} alt='foodImage'/>
        <h3>ID: {id}</h3>
        <h1 className=' font-bold md:text-lg text-sm'>{name}</h1>
        <p className=' font-semibold text-sm md:text-md'>Cuisine: {cuisine}</p>
        <p className='text-sm md:text-md'>prep time : {prepTimeMinutes} Minutes</p>
        <p className='text-sm md:text-md'>servings: {servings}</p>
        <p className='text-sm md:text-md'>difficulty: {difficulty}</p>
    </div>
  )
}

export default FoodCard