import React from 'react'
import navBar from './../../../assets/nav.svg'
import cartIcon from './../../../assets/CartIcon.svg'
import user from './../../../assets/User_03.svg'
const MenuBar = () => {
  return (
    <div className='flex justify-between items-center px-[10px] h-[30px] pt-[4px] mt-2 md:px-[60px]  md:py-[20px] w-full md:h-[85px]'>
       <div className='hidden md:flex  flex-row justify-between w-[127px] h-[24px] text-[18px] font-normal'>
         <span className=''>Home</span>
         <span>Shop</span>
       </div>


       <div className='w-[155.55px] h-[22px] md:w-[311px] gap-[214px] md:h-[43px]'>
         <img src={navBar} alt='Nav bar' className=''/>
       </div>

       <div className='flex flex-row justify-between items-center w-[20%] h-[30px] md:w-[96.8px]  md:h-[36px]'>
          <div >
            <img src={user} alt='user Icon' className='w-[24px] h-[30pz] md:w-[36px] md:h-[36px]'/>
          </div>
          <div>
            <img src={cartIcon} alt='cartIcon' className='w-[24px] h-[30pz] md:w-[36px] md:h-[36px]'/>
          </div>
       </div>
    </div>
  )
}

export default MenuBar
