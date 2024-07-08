import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate

const Card = ({bag}) => {
    const {bagName,bagPrice,bagImage, bagId}=bag

    const navigate=useNavigate()
    const handleNavigation=()=>{
       navigate("cartItem",{state:{bagName, bagImage,bagPrice,bagId}})
    }
  return (
    <div className='w-[150px] h-[236px] flex flex-col justify-between md:w-[290px] md:h-[426px]' onClick={handleNavigation}>
       <div className='w-[156px] h-[192px] md:w-[250px] md:h-[339px]'>
         <img src={bagImage} alt='itemImage'/>
       </div>
       <div className='flex justify-between items-center w-[156px] h-[36px] md:w-[250px] md:h-[330px]'>
          <span className='font-normal text-[16px] leading-[19.2px]'>{bagName}</span>
          <span className='font-bold text-[14px] leading-[17.07px]'>{bagPrice}</span>
       </div>
    </div>
  )
}

export default Card
