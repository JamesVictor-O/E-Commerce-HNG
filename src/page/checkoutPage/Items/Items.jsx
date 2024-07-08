import React from 'react'
import ItemDetails from '../ItemDetails/itemDetails'
import minus from "../../../assets/minus.svg"
import trash from "../../../assets/Trash_Full.svg"
import add from "../../../assets/add.svg"

import card from "../../../assets/card1.jpg"
const Items = ({item}) => {
  return (
    <div className=' md:w-[863.88px] md:h-[180px] w-[337.41px] mb-6 border pr-4 md:pr-1 border-gray-200 rounded md:mr-4 h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
            {/* image */}
            <div className='w-[60.32px] h-[60.32px] flex flex-row md:w-[332.02px] md:h-[140px]'>
                <img src={item.bagImage} alt='item image' className='w-[60.32px] h-[60.32px] md:w-[128.02px] md:h-[140px]'/>
                    {/* Details */}
                    <ItemDetails item={item}/>
            </div>
            

            {/* amount */}
        <div className='md:w-[421.85px] md:h-[48px] w-[89.75px] h-[60px] flex flex-col justify-between items-end md:flex-row-reverse md:items-center '>
            <img src={trash} alt="trash" className='bg-black w-[21.13px] mr-8 hidden md:block p-[4px]'/>
            <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>{item.bagPrice}</span>
            <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                <div className='w-[61.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                    <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]'/>
                    <span className='w-[15.99px] h-[14.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>1</span>
                    <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px]' />
                </div>
                <img src={trash} alt="trash" className=' bg-[#EDE7E7] w-[21.13px] md:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Items