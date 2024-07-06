import React from 'react'
import searchIcon from "../../../../assets/searchIcon.svg"
const SearchBar = () => {

  return (
    <div  className='w-[100%] h-[48px] md:w-[726px] flex flex-row items-center  bg-[#F1FFFF] rounded-tl rounded-bl'>
        <img src={searchIcon} alt='search icon' className=' bg-transparent  md:bg-black md:w-[60px]'/>
        <input 
        type='text' 
        placeholder='search for your favourite totebag, color, design pattern'
        className='h-[100%] w-[90%] md:w-[666px]  md:h-[60px] outline-none border rounded md:px-[50px] bg-[#F1FFFF]'
        />
    </div>
  )
}

export default SearchBar
