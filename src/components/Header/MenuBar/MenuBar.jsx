import React from 'react'
import navBar from './../../../assets/nav.svg'
import cartIcon from './../../../assets/CartIcon.svg'
import user from './../../../assets/User_03.svg'
import { useNavigate } from 'react-router-dom'
const MenuBar = () => {
  const navigate=useNavigate()
  const handleCartNavigatin=()=>{
    navigate("/")
  }
  const handleCheckOutNavigatin=()=>{
    navigate("checkout")
  }
   const handleNavigationToPaymentPage=()=>{
    navigate("/")
   }
  return (
    <div className='flex justify-between items-center w-[326.55px]  h-[30px]  mt-2 md:pl-[60px] md:pr-[64px] md:pt-[20px] md:pb-[20px]  md:w-[1440px] md:h-[85px]'>
       <div className='hidden md:flex  flex-row justify-between w-[127px] h-[24px] text-[18px] font-normal'>
        <button onClick={handleCartNavigatin}>Home</button>
         <span>Shop</span>
       </div>


       <div onClick={handleCartNavigatin} className='w-[155.55px] h-[22px] md:w-[311px] gap-[214px] md:h-[43px]'>
         <img src={navBar} alt='Nav bar' className=''/>
       </div>

       <div className='flex flex-row justify-between items-center w-[20%] h-[30px] md:w-[96.8px]  md:h-[36px]'>
          <div>
            <img src={user} alt='user Icon' className='w-[24px] h-[30pz] md:w-[36px] md:h-[36px]'/>
          </div>
          <div onClick={handleCheckOutNavigatin}>
            <img src={cartIcon} alt='cartIcon' className='w-[24px] h-[30pz] md:w-[36px] md:h-[36px]'/>
          </div>
       </div>
    </div>
  )
}

export default MenuBar
