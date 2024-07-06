import React from 'react'
import searchIcon from "../../../../assets/searchIcon.svg"
const SearchBar = () => {

  return (
    <div  className='relative w-[326px] md:w-[726.64px] h-[48px]  flex flex-row items-center  bg-[#F1FFFF] rounded-tl rounded-bl'>
      <img src={searchIcon} 
      alt='search icon' 
      className='bg-transparent w-[24px] h-[24px] md:h-[60.55px] absolute md:relative top-2 md:top-0 left-2 md:bg-black md:w-[60px]'/>
        <input 
        type='text' 
        placeholder='search for your favourite totebag, color, design pattern'
        className='h-[100%] w-[326px] md:w-[666px] md:h-[60px] pl-8 outline-none border rounded md:px-[50px] bg-[#F1FFFF]'
        />
        
    </div>
  )
}

export default SearchBar
