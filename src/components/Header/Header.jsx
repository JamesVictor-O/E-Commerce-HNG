import React, { useState } from 'react'
import MenuBar from './MenuBar/MenuBar'
import SearchSection from './SearchSection/SearchSection'
import { useLocation } from 'react-router-dom'
import SignUpLogin from '../signUpLogin/SignUpLogin'
const Header = () => {
  const location = useLocation()
  const [isClickedOn,setIsclickedOn]=useState(false)
  return (
    <div className='skicky top-0 z-10 flex flex-col items-center w-[375px] sm:w-[640px] md:w-[1440px] '>
        <MenuBar setIsclickedOn={ setIsclickedOn } />
        {location.pathname === "/" && <SearchSection/> }
      {isClickedOn && <SignUpLogin setIsclickedOn={ setIsclickedOn }/>}
    </div>
  )
}

export default Header
