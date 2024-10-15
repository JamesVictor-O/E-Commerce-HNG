import React, { useContext, useState } from 'react'
import MenuBar from './MenuBar/MenuBar'
import SignoutProfile from '../SignOutProfile/SignoutProfile'
import SearchSection from './SearchSection/SearchSection'
import { useLocation } from 'react-router-dom'
import SignUpLogin from '../signUpLogin/SignUpLogin'
import { CartContext } from '../contextAPI/CartContext/CartContext'
const Header = () => {
  const {currentUser}=useContext(CartContext)
  const location = useLocation()
  const [isClickedOn,setIsclickedOn]=useState(false)
  return (
    <div className=' flex flex-col items-center  w-full '>
        <MenuBar setIsclickedOn={ setIsclickedOn } />
        {location.pathname === "/" && <SearchSection/> }
      {isClickedOn && (
        currentUser ? <SignoutProfile isClickedOn={isClickedOn }  setIsclickedOn={ setIsclickedOn }/> : <SignUpLogin isClickedOn={isClickedOn }  setIsclickedOn={ setIsclickedOn }/> 
      )
      }
    </div>
  )
}

export default Header
