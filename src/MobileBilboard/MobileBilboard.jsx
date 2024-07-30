import React from "react";

const MobileBilboard = ({ selectedBoardId,setSelectedBoardId,id,header, message,imageUrl}) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="relative bilboard-background w-[350px]  h-[320px] rounded-[20px] overflow-hidden ml-4 flex "
    >
      <div className="absolute inset-0 bg-custom-overlay opacity-70 text-white">
        <div
          className={`h-[241.5px] flex flex-col items-center w-full`}
        >
          <h2 className="text-white text-[30px] font-medium leading-[45.9px] mb-4">
            {header}
          </h2>
          <p className="text-[18px] font-normal leading-[28.8px] mb-5">
            {message}
          </p>
          <button className="max-w-[181.38px] h-[69.59px] rounded-[50px] bg-white hover:bg-gray-400 hover:text-white text-black py-[20.7px] px-[41.69px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBilboard;
