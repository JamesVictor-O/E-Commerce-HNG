import React from 'react'
import searchIcon from "../../../../assets/searchIcon.svg"
const SearchBar = () => {

  return (
    <div  className='relative w-[326px] h-[40px] flex flex-row items-center rounded-[8px]  md:w-[726.64px]  md:h-[60px] '>
      <img src={searchIcon} 
      alt='search icon' 
      className='bg-transparent object-cover md:h-full w-[24px] h-[24px]  absolute md:relative top-2 md:top-0 left-2 md:bg-black md:w-[60px] rounded-tl rounded-bl'/>
        <input 
        type='text' 
        placeholder='search for your favourite totebag'
        className='h-[40px] w-[326px] md:w-[666px] md:h-[60px] pl-8 outline-none border rounded md:px-[50px] rounded-tl rounded-bl bg-[#F1FFFF] md:bg-white'
        />
        
    </div>
  )
}

export default SearchBar
