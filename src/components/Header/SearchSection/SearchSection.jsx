import React from 'react'
import SearchBar from './Searchbar/SearchBar'
import ItemCategories from './ItemCategories/ItemCategories'
const SearchSection = () => {
  return (
    <div className='relative h-[38px] mt-[20px] w-full md:h-[148.55px] flex justify-between bg-red flex-col items-center'>
         <SearchBar/>
        <div className='absolute top-[58px] left-[8px] md:w-full flex justify-center align-middle gap[16px]'>
        <ItemCategories/>
        </div>
    </div>
  )
}

export default SearchSection
