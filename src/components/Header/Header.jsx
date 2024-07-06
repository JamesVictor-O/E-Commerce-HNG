import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import SearchSection from './SearchSection/SearchSection'
const Header = () => {
  return (
    <div className='skicky top-0 z-10 flex flex-col items-center'>
        <MenuBar/>
        <SearchSection/>
    </div>
  )
}

export default Header
