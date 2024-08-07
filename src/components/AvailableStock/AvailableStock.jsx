import Card from "../card/card"
import { v4 as uuidv4 } from 'uuid';
import card1 from "../../assets/card1.jpg"
import card2 from "../../assets/card2.jpg"
import card3 from "../../assets/card3.jpg"
import { useContext, useState } from "react";
import { myStates } from "../contextAPI/MyStateProvider";

const AvailableStock = () => {
  const {products}=useContext(myStates)
  const [selectedproductId,setSelectedproductId]=useState(null)
  return (
    <div className="relative mt-4  max-w-[328px] ml-[10px] md:mt-10 gap-5 md:max-w-[1329px]">
        <div className="w-[326px] h-[40px] md:w-[552px] md:h-[82px] mb-3 md:mb-0 ">
            <h2 className="font-semibold text-[20px] leading-[14.4px] tracking-[0.6px] h-[20px] w-[160px] md:w-[263px] md:h-[42px] md:font-semibold md:text-[36px] ">Available Stock</h2>
            <h6 className="w-[326px] h-[14px] text-[18px] tracking-[-0.6px] text-[#4E5050] md:w-[522px] md:h-[28px] md:text-[24px] md:leading-[28.18px] font-thin">Discover our Leatest collecton of bags</h6>
        </div>
        <div 
        className="flex flex-row flex-wrap content-start w-[328px]  gap-4  items-center  no-scrollbar  md:w-[1320px] "
        >
            {products.slice(0,10).map(product=>(
              <Card 
              key={product.id} 
              product={product}
              selectedproductId={selectedproductId}
              setSelectedproductId={setSelectedproductId}
              />
              
            ))}
        </div>
    </div>
  )
}

export default AvailableStock
