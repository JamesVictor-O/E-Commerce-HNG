import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import SearchSection from './SearchSection/SearchSection'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const location=useLocation()
  return (
    <div className='skicky top-0 z-10 flex flex-col items-center w-[375px] sm:w-[640px] md:w-[1440px] '>
        <MenuBar/>
        {location.pathname === "/" && <SearchSection/> }
    </div>
  )
}

export default Header
