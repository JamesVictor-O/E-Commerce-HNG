import React from 'react'
import firstPic from "../../assets/firstAdvPic.jpg"
import secondPic from "../../assets/secondAdvPic.jpg"
import loder from "../../assets/Loader.svg"
const Advert = () => {
  return (
    <div className='w-full min-w-96 mt-4 md:mt-3'>
       <div className='w-full m h-[68px] mb-[8px]'>
          <h2 className='text-xl md:text-[32px] font-semibold '>Shop your favourite totebag</h2>
          <h6 className='text-[18px] font-normal'>Select the totebage that matches your fashion</h6>
       </div>
       <div className='relative w-full h-[454.55px] rounded-[37.19px] border-[0.52px]  mt-7 custom-background bg-custom-overlay '>    
         <div className="absolute inset-0 bg-custom-overlay opacity-75">
             <div className="relative z-10">
                  <div className='w-full h-[339.75px] mx-3 md:mx-0 md:ml-[74.38px]  mt-[42.36px] flex md:justify-between flex-col'>
                       <div className='w-[173.56px] h-[16.53px] '>
                         <img src={loder} alt="loder" />
                       </div>
                       
                       <div className='w-full  max-w-[379px] h-[149.66px] mt-24 md:mt-0'>
                           <div className='w-full max-w-[365px] h-[79.13px] text-white'>
                              <h6 className='w-[230px] h-[25px] font-normal text-[20.66px] leading-[24.79px] '>
                                 TRENDING TOTEBAGS
                              </h6>
                              <h2 className='w-[365px] h-[50px] font-semibold text-2xl md:text-[41.32px] leading-[50.37px]'>
                                 Denim Totebags
                              </h2>
                           </div>
                           <p className='w-full max-w-[379px]  h-[54px] font-medium leading-[27px] text-white'>Totebag’s made with jean fabric to meet your fashion taste</p>
                       </div>
                  </div>
            </div>
         </div>
       </div>
    </div>
  )
}
export default Advert
