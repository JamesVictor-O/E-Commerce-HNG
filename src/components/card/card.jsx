import React from 'react'

const Card = ({bag}) => {
    const {bagName,bagPrice,bagImage}=bag
  return (
    <div className='w-[150px] h-[236px] gap[8px]'>
       <div className='w-[156px] h-[192px]'>
         <img src={bagImage} alt='itemImage'/>
       </div>
       <div className='flex justify-between items-center w-[156px] h-[36px]'>
          <span className='font-normal text-[16px] leading-[19.2px]'>{bagName}</span>
          <span className='font-bold text-[14px] leading-[17.07px]'>{bagPrice}</span>
       </div>
    </div>
  )
}

export default Card
