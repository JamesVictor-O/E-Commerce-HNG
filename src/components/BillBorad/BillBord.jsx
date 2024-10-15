import React, { useEffect, useRef, useState } from 'react'
import Boards from './Boards/Boards';
import MobileBilboard from '../../MobileBilboard/MobileBilboard';
const BillBoard = () => {
  const [selectedBoardId,setSelectedBoardId]=useState("firstBoard")
  const boardInfo = [
    {
      header: "Take a walk with Us",
      id: "firstBoard",
      imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
      message:"we are dedicated to making ever step you take feel comfortable and easy, will making you look like a model"
    },
    {
      header: "Explore the totebag Fashion",
      id: "secondBoard",
      imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      message:" totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense"
    },
    {
      header: "Explore the totebag Fashion",
      id: "ThirdBoard",
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      message:" totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense"
    },
  ]

  const containerRef = useRef(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left:400, behavior: 'smooth' })
        }
    }, 5000)
    return ()=> clearInterval(interval)
  }, [])
  
  return (
    <>
         {/* billboard for desktop */}
      <div  className="hidden w-full lg:w-[90%] md:min-h-[460px] md:py-[20px]  md:flex flex-row gap-4 mb-10">
        {boardInfo.map((board) => (
          <Boards
            key={board.id}
            selectedBoardId={selectedBoardId}
            setSelectedBoardId={setSelectedBoardId}
            {...board}
          />
        ))}
      </div>
      {/* mobile bilboard */}
      
     <div ref={containerRef} className='w-full no-scrollbar overflow-x-auto mb-10  mt-5 md:hidden scroll-smooth'>
        
        <div  className="relative w-[1218px] md:min-h-[360px] md:py-[20px]  flex flex-row gap-4 ">
      
          {boardInfo.map((board) => (
            <MobileBilboard
              key={board.id}
              selectedBoardId={selectedBoardId}
              setSelectedBoardId={setSelectedBoardId}
              {...board}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BillBoard
