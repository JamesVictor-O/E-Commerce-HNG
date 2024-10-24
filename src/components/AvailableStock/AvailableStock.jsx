import Card from "../card/card"
import { v4 as uuidv4 } from 'uuid';
import card1 from "../../assets/card1.jpg"
import card2 from "../../assets/card2.jpg"
import card3 from "../../assets/card3.jpg"
import { useContext, useState } from "react";
import { ProductContext } from "../contextAPI/ProductContext/ProductContext";

const AvailableStock = () => {
  const {products}=useContext(ProductContext)
  const [selectedproductId,setSelectedproductId]=useState(null)
  return (
    <div className="w-full mt-4">
        <div className="w-full h-[40px] md:h-24 mb-3 md:mb-4 md:py-3">
            <h2 className="font-semibold text-[20px] leading-[14.4px] tracking-[0.6px] h-[20px]  md:h-[42px] md:font-semibold md:text-[36px] ">Available Stock</h2>
            <h6 className="w-[326px] h-[14px] text-[18px] tracking-[-0.6px] text-[#4E5050] md:w-[522px] md:h-[28px] md:text-[24px] md:leading-[28.18px] font-thin">Discover our Leatest collecton of bags</h6>
        </div>
        <div 
        className=" grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4 justify-center no-scrollbar"
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
