import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { myStates } from '../contextAPI/MyStateProvider'
useNavigate

const Card = ({product,selectedproductId,setSelectedproductId}) => {
    const {setDisplayitemId}=useContext(myStates)
    const {name,price,imageUrl,id}=product  

    
    const navigate=useNavigate()
    const handleNavigation=()=>{
       navigate("cartItem")
       setDisplayitemId(id)
    }

    const handleShopingdisplay=()=>{
       setSelectedproductId(id)
    }

    const isShopitem= selectedproductId === id
  return (
    <div className='max-w-[156px] bg-white h-[236px] flex flex-col  items-center md:max-w-[250px] md:h-[426px] rounded-[10px]' onMouseEnter={handleShopingdisplay}>
       <div className='w-full h-[80%] '>
         <img src={imageUrl}
          alt='itemImage'
          className='object-cover  w-full h-[100%] md:mt-6'
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/150'; // Fallback image
          }}
         />
       </div>

       {
         !isShopitem ? (
        <div className='flex justify-between items-center w-[140px] h-[15%] md:w-[250px]  px-4 mt-9'>
          <div>
            <span className='font-semibold text-[16px] leading-[19.2px]'>{name}</span>
            <p className='font-light'>Sold out 85%</p>
          </div>
          <span className='font-bold text-[14px] leading-[17.07px]'>${price}</span>
       </div>
         ) :
           (
            <button onClick={handleNavigation} className='mt-5 w-[100px] h-[36px] md:w-[200px] md:h-[50px] md:mt-8 pl-1 pr-1 rounded-full bg-gray-200 border border-black'>Shop Item</button>
           )  
       }
      
      
    </div>
  )
}

export default Card
