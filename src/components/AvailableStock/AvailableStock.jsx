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
    <div className="relative top-[80px] w-[328px] h-[1058px]">
        <div className="w-[226px] h-[34px]">
            <h2 className="font-semibold text-[12px] leading-[14.4px] tracking-[0.6px] h-[14px] w-[95px] ">Available Stock</h2>
            <h6 className="w-[226px] h-[14px] text-[12px] tracking-[-0.6px] font-medium text-[#4E5050]">Discover our Leatest collecton of bags</h6>
        </div>
        <div className="flex flex-row flex-wrap gap-2 w-[328px] h-[1016px] overflow-x-auto no-scrollbar">
            {bagsToDisplay.map(bags=>(
              <Card key={bags.bagId} bag={bags}/>
            ))}
        </div>
    </div>
  )
}

export default AvailableStock
