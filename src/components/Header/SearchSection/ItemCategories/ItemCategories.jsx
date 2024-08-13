import React, { useRef, useState } from 'react'
import vector from "../../../../assets/vector2.svg"
const ItemCategories = () => {
  const [currentID,setCurrentID]=useState(0)
  const handleOnClick = (e) => {
    let ID = e.target.id;
    setCurrentID(ID)
  }
  return (
    <div className=' w-[326px] h-[50px] md:h-[56px] pl-[120px] md:mb-2 md:ml-0 md:pl-0 no-scrollbar overflow-x-auto  md:w-[629px] flex justify-center items-center align-middle'>
      <div  onClick={handleOnClick} className='w-[726px] h-[30px] md:w-[629px] items-end md:items-center md:h-[56px] flex flex-row justify-between '>
        <div className='search_menu_all' id='1'>
           <span className='text-white ml-2'>All</span>
           <img src={vector} className='' alt="vector" />
        </div>
        <div className={`search_menu ${currentID === "2" ? "bg-black text-white": "bg-transparent text-black"}`} id='2'>Corduroy</div>
        <div className={`search_menu ${currentID === "3" ? "bg-black text-white": "bg-transparent text-black"}`} id='3'>Denim</div>
        <div className={`search_menu ${currentID === "4" ? "bg-black text-white": "bg-transparent text-black"}`} id='4'>Adire</div>
        <div className={`search_menu ${currentID === "5" ? "bg-black text-white": "bg-transparent text-black"}`} id='5'>Adire</div>
      </div>
    </div>
  )
}

export default ItemCategories
