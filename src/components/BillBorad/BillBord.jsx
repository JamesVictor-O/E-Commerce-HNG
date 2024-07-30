import React, { useState } from 'react'
import Boards from './Boards/Boards';
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
  return (
    <div className="hidden md:max-w-[1318px] md:min-h-[660px] md:py-[20px]  md:flex flex-row gap-4">
      {
        boardInfo.map(board => (
          <Boards
            key={board.id}
            selectedBoardId={selectedBoardId}
            setSelectedBoardId={setSelectedBoardId}
            {...board}
          />
        ))
      }
    </div>
  );
}

export default BillBoard
