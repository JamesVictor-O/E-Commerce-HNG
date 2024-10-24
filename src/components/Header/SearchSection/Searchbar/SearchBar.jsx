import React from 'react'
import searchIcon from "../../../../assets/searchIcon.svg"
const SearchBar = () => {

  return (
    <div  className='relative w-full h-10 flex flex-row items-center rounded-[8px]  md:w-[726.64px]  md:h-[60px] '>
      <img src={searchIcon} 
      alt='search icon' 
      className='bg-transparent object-cover md:h-full w-6 h-6  absolute md:relative top-2 md:top-0 left-2 md:bg-black md:w-16 rounded-tl rounded-bl'
      />

        <input 
        type='text' 
        placeholder='search for your favourite totebag'
        className='h-10 w-full md:w-[666px] md:h-16 pl-8 outline-none border rounded md:px-12 rounded-tl rounded-bl bg-white'
        />
        
    </div>
  )
}

export default SearchBar
