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
    <div className='w-[156px] bg-white h-[236px] flex flex-col  items-center md:w-[250px] md:h-[426px] rounded-[10px]' onMouseEnter={handleShopingdisplay}>
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
        <div className='flex flex-col ml-5 md:flex-row md:justify-between md:items-center w-full h-[20%] md:w-[250px]  md:px-4  md:mt-9'>
          <div className=''>
            <span className='font-semibold text-[12px] md:text-[16px] md:leading-[19.2px]'>{name}</span>
            <p className='hidden md:block font-light'>Sold out 85%</p>
          </div>
          <span className='font-bold text-[14px] leading-[17.07px]'>${price}</span>
       </div>
         ) :
           (
            <button onClick={handleNavigation} className='shop_item'>Shop Item</button>
           )  
       }
      
      
    </div>
  )
}

export default Card
