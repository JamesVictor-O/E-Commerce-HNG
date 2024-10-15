import React, { useState,useContext } from 'react'
import navBar from './../../../assets/nav.svg'
import cartIcon from './../../../assets/CartIcon.svg'
import user from './../../../assets/User_03.svg'
import humbugerIcon from './../../../assets/humbuger.png'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contextAPI/CartContext/CartContext'
import { UIcontext } from '../../contextAPI/UIContext/UiProvider'
const MenuBar = ({setIsclickedOn}) => {
  const {cartItems}=useContext(CartContext);
  // const {isLoggedIn}=useContext(UIcontext);

  const navigate=useNavigate()
  const handleCartNavigatin=()=>{
    navigate("/")
  }
  const handleCheckOutNavigatin=()=>{
    navigate("checkout")
  }
  const handleNagigateToShop = () => {
    navigate('shop')
  }
  const handleSignUpLogin = () => {
    setIsclickedOn(prev=> !prev)
  }
  return (
    <div className="w-full flex justify-between items-center border-b border-[#5a5757] pb-2 md:pb-5 md:px-5">
      {/* navbars */}
      <div className="hidden md:flex  flex-row justify-between w-28 h-8 text-lg font-normal cursor-pointer">
        <span
          onClick={handleCartNavigatin}
          className="hover:border-b-2 border-black  pb-2"
        >
          Home
        </span>
        <span
          onClick={handleNagigateToShop}
          className="hover:border-b-2 border-black  pb-2"
        >
          Shop
        </span>
      </div>

      {/* logo */}
      <div
        onClick={handleCartNavigatin}
        className=" w-full md:w-[311px]  md:h-[43px] max-w-full"
      >
        <img src={navBar} alt="Nav bar" className="w-[80%] md:w-full" />
      </div>

      {/* profile and cart logo */}
      <div className="flex flex-row justify-between items-center w-[20%]  md:w-[96.8px]  md:h-[36px] ">
        {/* cart items icon */}
        <div  className="relative">
          <div className="bg-black w-[20px] h-[20px] absolute  p-1 rounded-[50%] left-4 bottom-5 flex items-center justify-center">
            <span className="text-white font-semibold">{cartItems.length}</span>
          </div>
          <img
            src={cartIcon}
            alt="cartIcon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px]"
          />
        </div>

        {/* profile picture */}
        <div >
          <img
            src={user}
            alt="user Icon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px] md:flex hidden"
          />
          <img
            src={humbugerIcon}
            onClick={handleSignUpLogin}
            alt="user Icon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px] md:hidden flex"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuBar
