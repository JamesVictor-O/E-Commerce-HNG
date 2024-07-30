import React from "react";
 
  const Boards = ({ selectedBoardId,setSelectedBoardId,id,header, message,imageUrl}) => {
  const handleOnMouseIn = () => {
    setSelectedBoardId(id)
    }
    const isHoverdOn = selectedBoardId === id;
    return (
      <div
        style={{ backgroundImage: `url(${imageUrl})`}}
        className={`relative bilboard-background  h-[620px] rounded-[20px] overflow-hidden ml-4   ${isHoverdOn ? " w-[643px]" : "w-[343px]"}`} onMouseOver={handleOnMouseIn}
      >
      <div className="absolute inset-0 bg-custom-overlay opacity-70 text-white">
        <div className={`h-[241.5px] mt-48  flex flex-col   ${isHoverdOn ? " w-[543px] ml-7 items-start" : "w-full ml-3 items-center" }`}>
          <h2 className="text-white text-[40px] font-medium leading-[45.9px] mb-4">
            {header}
          </h2>
          <p className="text-[25px] font-normal leading-[28.8px] mb-5">
           { message}
          </p>
          <button  className="max-w-[181.38px] h-[69.59px] rounded-[50px] bg-white hover:bg-gray-400 hover:text-white text-black py-[20.7px] px-[41.69px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boards;
