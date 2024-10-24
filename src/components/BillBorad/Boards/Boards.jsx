import React from "react";
import { useNavigate } from "react-router-dom";
 
const Boards = ({ selectedBoardId, setSelectedBoardId, id, header, message, imageUrl }) => {
    const navigate=useNavigate()
  const handleOnMouseIn = () => {
    setSelectedBoardId(id)
    }

    const handleOnClick = () => {
      navigate("shop")
    }
    const isHoverdOn = selectedBoardId === id;
    return (
      <div
        style={{ backgroundImage: `url(${imageUrl})`}}
        className={`relative bilboard-background  h-[420px] rounded-[20px] overflow-hidden ml-4   ${isHoverdOn ? " w-[743px]" : "w-[543px]"}`} onMouseOver={handleOnMouseIn}
      >
      <div className="absolute inset-0 bg-custom-overlay opacity-70 text-white">
        <div className={`h-[241.5px] mt-11  flex flex-col   ${isHoverdOn ? " w-[543px] ml-7 items-start" : "w-full ml-3 items-center" }`}>
          <h2 className="text-white text-[40px] font-medium leading-[45.9px] mb-4 font-thin">
            {header}
          </h2>
          <p className="text-[20px] font-normal leading-[28.8px] mb-5 font-thin">
           { message}
          </p>
          <button onClick={handleOnClick} className="max-w-[181.38px] h-[69.59px] rounded-[50px] bg-white hover:bg-gray-400 hover:text-white text-black py-[20.7px] px-[41.69px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boards;
