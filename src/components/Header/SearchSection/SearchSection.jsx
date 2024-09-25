import React from 'react'
import SearchBar from './Searchbar/SearchBar'
import ItemCategories from './ItemCategories/ItemCategories'
const SearchSection = () => {
  return (
    <div className='h-[100px] mt-5 w-full md:w-[726.64px] md:h-[148.55px] flex justify-between bg-red flex-col items-center'>
         <SearchBar/>
        <ItemCategories/>
    </div>               
  )
}

export default SearchSection
