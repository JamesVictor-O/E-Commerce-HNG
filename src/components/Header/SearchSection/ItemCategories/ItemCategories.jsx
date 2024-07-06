import React from 'react'

const ItemCategories = () => {
  return (
    <div className='w-[70%] h-[30px] md:w-[629px] items-end md:items-center md:h-[56px] flex flex-row justify-between' >
       <div className='w-[101px] h-[20px] md:h-[40px] text-[15px] rounded-[30px] border-[1px] text-center md:pt-2 font-normal'>All</div>
       <div className='w-[101px] h-[20px] md:h-[40px] text-[15px] rounded-[30px] border-[1px] text-center md:pt-2 font-normal'>Corduroy</div>
       <div className='w-[101px] h-[20px] md:h-[40px] text-[15px] rounded-[30px] border-[1px] text-center md:pt-2 font-normal'>Denim</div>
       <div className=' w-[101px] h-[20px] md:h-[40px] text-[15px] rounded-[30px] border-[1px] text-center md:pt-2 font-normal'>Adire</div>
       <div className='w-[101px] h-[20px] md:h-[40px] text-[15px] hidden md:block rounded-[30px] border-[1px] text-center md:pt-2 font-normal'>Leather</div>
    </div>
  )
}

export default ItemCategories
