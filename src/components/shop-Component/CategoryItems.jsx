import React from "react";

const CategoryItems = ({ product }) => {
  return (
    <div className="h-[330px] md:w-[323px] md:h-[430px] md:ml-4 rounded border border-gray-500 mb-4">
      <div className="w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt=""
          className="w-full object-fill md:object-cover h-60 md:h-80 "
        />
      </div>
      <div className="p-2 flex flex-col md:justify-between">
        <div className="flex flex-row justify-between md:mt-2 items-center mb-2 px-2">
          <span className="text-black text-[13px] font-normal md:text-[15px] md:font-medium font-sans">
            {product.name}
          </span>
          <span className="border border-gray-400  text-gray-600 font-bold p-1 rounded-[10px]">
            ${product.price}
          </span>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center">
          <button className="bg-black hover:bg-gray-400 hover:text-black text-white rounded-full py-2 px-6 font-thin">
            Shop Now
          </button>
          <button className="flex text-black border hover:bg-gray-400 border-black rounded-full py-2 px-6 font-thin">
            Add to Cart
          </button>
        </div>
        {/* for mobile */}
        <button className= "md:hidden hover:bg-black bg-gray-400 text-black hover:text-white rounded-full py-[5px] px-6 ">
            Shop Now
          </button>
      </div>
    </div>
  );
};

export default CategoryItems;
