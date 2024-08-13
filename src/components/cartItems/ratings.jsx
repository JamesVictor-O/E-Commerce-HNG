import React from 'react'

const Ratings = ({Star}) => {
  return (
        <div className="md:w-[215px] md:h-[40px] gap-[3.75px] flex flex-row items-center ">
            <div className="bg-black w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
            <img src={Star} alt="rating"/>
            </div>
            <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
            <img src={Star} alt="rating"/>
            </div>
            <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
            <img src={Star} alt="rating"/>
            </div>
            <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
            <img src={Star} alt="rating"/>
            </div>
            <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
            <img src={Star} alt="rating"/>
            </div>  
        </div>
  )
}

export default Ratings
