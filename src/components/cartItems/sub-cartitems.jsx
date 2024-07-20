import React from 'react'
import { useContext } from 'react'
import { myStates } from '../contextAPI/MyStateProvider'

const SubCartItems = ({card}) => {
    const {products,setDisplayitemId,displayItemID}=useContext(myStates)

    const displaySimilarItems=(displayItemID,count=3)=>{
      const targetID= Array.from({ length: count }, (_, i) => displayItemID + i + 1)
        return products.filter(item => targetID.includes(item.id))
    }


  return (
    <div className="w-[296px] h-[88px] md:w-[424px] md:h-[161.46px]  flex flex-row items-center justify-between  mt-[80px]">
        {
            displaySimilarItems(displayItemID).map(prod=>(
                <div key={prod.id} 
                onClick={(e => setDisplayitemId(prod.id))}
                 className="w-[88px] h-[88px] md:w-[105.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                    <img src={prod.imageUrl} alt="item image"/>
                    <span>{prod.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default SubCartItems
