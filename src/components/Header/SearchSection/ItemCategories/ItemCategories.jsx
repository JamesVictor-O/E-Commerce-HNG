import React from 'react'

const ItemCategories = () => {
  return (
    <div className=' w-[326px] h-[50px] md:h-[56px] pl-[120px] md:mb-2 md:ml-0 md:pl-0 no-scrollbar overflow-x-auto  md:w-[629px] flex justify-center items-center align-middle'>
      <div className='w-[726px] h-[30px] md:w-[629px] items-end md:items-center md:h-[56px] flex flex-row justify-between '>
        <div className='bg-orange-200 w-[90px] h-[39px] md:w-[109px] md:h-[39px] rounded-[33.75px] border-[0.5px] pt-[5px] pl-[18px] pb-[10px] pr-[18px] text-center'>All</div>
        <div className='w-[90px] h-[39px] md:w-[101px] md:h-[39px] rounded-[33.75px] border-[0.5px] px-[0px] py-[18px]  flex justify-center items-center'>Corduroy</div>
        <div className='w-[90px] h-[39px] md:w-[101px] md:h-[39px] rounded-[33.75px] border-[0.5px] px-[0px] py-[18px] gap-[11.25px] flex justify-center items-center'>Denim</div>
        <div className='w-[90px] h-[39px] md:w-[101px] md:h-[39px] rounded-[33.75px] border-[0.5px] px-[0px] py-[18px] gap-[11.25px] flex justify-center items-center'>Adire</div>
        <div className='w-[90px] h-[39px] md:w-[101px] md:h-[39px] rounded-[33.75px] border-[0.5px] px-[0px] py-[18px] gap-[11.25px] flex justify-center items-center'>Adire</div>
      </div>
    </div>
  )
}

export default ItemCategories
