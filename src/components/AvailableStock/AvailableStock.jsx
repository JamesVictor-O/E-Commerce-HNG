import Card from "../card/card"
import { v4 as uuidv4 } from 'uuid';
import card1 from "../../assets/card1.jpg"
import card2 from "../../assets/card2.jpg"
import card3 from "../../assets/card3.jpg"

const AvailableStock = () => {
   const bagsToDisplay=[
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card1,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card2,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      {
        bagName:"cotten",
        bagPrice:"$50",
        bagImage:card3,
        bagId: uuidv4()
      },
      
   ]
  return (
    <div className="relative top-[80px] w-[328px] gap-5 p-3 md:pl-8 h-[1058px] md:w-[1190px] md:h-[1435px] ">
        <div className="w-[226px] h-[34px] md:w-[552px] md:h-[82px]">
            <h2 className="font-semibold text-[12px] leading-[14.4px] tracking-[0.6px] h-[14px] w-[95px] md:w-[263px] md:h-[42px] md:font-semibold md:text-[36px] ">Available Stock</h2>
            <h6 className="w-[226px] h-[14px] text-[12px] tracking-[-0.6px] font-medium text-[#4E5050] md:w-[522px] md:h-[28px] md:text-[24px] md:leading-[28.18px]">Discover our Leatest collecton of bags</h6>
        </div>
        <div className="flex gap-[24px] md:gap-0 flex-row flex-wrap w-[330px] h-[1016px] overflow-x-auto no-scrollbar md:yes-scrollbar md:w-[1190px]  md:h-[1329px]">
            {bagsToDisplay.map(bags=>(
              <Card key={bags.bagId} bag={bags}/>
            ))}
        </div>
    </div>
  )
}

export default AvailableStock
