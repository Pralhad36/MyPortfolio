import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShimmerForFoodDetail from './ShimmerForFoodDetail'

export const RecipeDetailPage = () => {

    const [resDetail , setResDetail] = useState()
    const navigate = useNavigate()

    const userId = useParams("userId")

    const user = userId.userId

    console.log(user)

    const getResDetail = async () => {
        try {
            const data = await fetch("https://dummyjson.com/recipes/"+ user)
        const res = await data?.json()
        setResDetail(res)
        } catch (error) {
            console.error(error.message)
        }
    }

    // const {name,prepTimeMinutes,rating,reviewCount,image,id,difficulty} = resDetail

    console.log(resDetail)


    useEffect(() => {
        getResDetail()
    }, [])
   return (
    
    
     !resDetail ? <ShimmerForFoodDetail/> : 
     
    <div className='mt-0  flex-col justify-start items-start w-full flex'>
        <button className=' w-20 bg-slate-500 text-white md:text-base text-xs px-2 p-1 md:mt-1 rounded-lg mx-10 my-2' onClick={() => {navigate("/foodRecipe")}}>Back</button>

        <div className='  flex md:flex-row flex-col justify-center  md:p-5 md:mx-10 p-4 bg-gray-100 rounded-3xl'>
            
            <img className='  md:w-5/12 w-full rounded-2xl  ' src={resDetail.image}/>
            <div className=' my-4 md:mx-8 mx-2 md:w-[40%] w-full'>
                <h1 className=' font-bold text-xl'>{resDetail.name}</h1>
                <p className='py-1'>cuisine: {resDetail.cuisine}</p>
                <p className=' py-1 '><h2 className=' font-bold'>Instructions:</h2> {resDetail.instructions}</p>
                <p className=' py-1 font-bold'>prepare Time : {resDetail.prepTimeMinutes}Minutes</p>
                <div><h2 className=' font-bold'>Ingredians:</h2> { resDetail.ingredients.map ( ingre =><p> {ingre}</p>)}</div>
                <div className=' flex flex-col my-2'><h2 className=' font-bold'>Tags:</h2> <div className=' flex flex-row'>{ resDetail.tags.map ( tag => <p>{tag+ ","}  </p>)}</div></div>
            </div>
        </div>
        
    </div> 
  )
}
