import React from 'react'
import firstPic from "../../assets/firstAdvPic.jpg"
import secondPic from "../../assets/secondAdvPic.jpg"
import loder from "../../assets/Loader.svg"
const Advert = () => {
  return (
    <div className='w-[1312px] relative h-[454.55px] bg-red-200'>
       <div>
          <h2 className='text-[32px] font-normal '>Shop your favourite totebag</h2>
          <h6 className='text-[18px] font-normal'>Select the totebage that matches your fashion</h6>
       </div>
       <div className='flex justify-between flex-row'>
           
           <div className='bg-yellow-100 w-[379px] h-[330px] flex justify-between flex-col'>
              <img src={loder} alt='loder'/>
              <div>
                <div>
                    <h6>TRENDING TOTEBAGS</h6>
                    <h2>Leather Totebags</h2>
                </div>
                <p>Totebag's made with leather fabrics, This fabric is usually stronger than the others</p>
              </div>
           </div>
           {/* <div className='absolute w-[600px] h-[635.35px]'>
              <img src={firstPic} alt='advertPicture'/>
           </div> */}
           {/* <div>
              <img src={secondPic} alt='advertPicture'/>
           </div> */}
       </div>
    </div>
  )
}

export default Advert
