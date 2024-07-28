import React from "react";

const Bordes = () => {
  return (
    <div className="relative custom-background w-[643px] h-[620px] rounded-[20px] ml-4 ">
      <div className="absolute inset-0 bg-custom-overlay opacity-75 text-white">
        <div className="md:max-w-[548px] h-[241.5px] mt-48 ml-7 flex flex-col items-start">
          <h2 className="text-white text-[40px] font-medium leading-[45.9px] mb-4">
            Explore the totebag Fashion
          </h2>
          <p className="text-[25px] font-normal leading-[28.8px] mb-5">
            totes are reliable carriage that adds to the details of your dress
            fashion with contradicting your fashion sense
          </p>
          <button className="max-w-[181.38px] h-[69.59px] rounded-[50px] bg-white hover:bg-gray-400 hover:text-white text-black py-[20.7px] px-[41.69px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bordes;
