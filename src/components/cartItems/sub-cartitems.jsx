import React from 'react'
import { useContext } from 'react'
import { UIcontext } from '../contextAPI/UIContext/UiProvider'
import { ProductContext } from '../contextAPI/ProductContext/ProductContext'
const SubCartItems = ({ card }) => {
  
    const {setDisplayitemId,displayItemID}=useContext(UIcontext)
    const {products}=useContext(ProductContext)

    const displaySimilarItems=(displayItemID,count=3)=>{
      const targetID= Array.from({ length: count }, (_, i) => displayItemID + i + 1)
        return products.filter(item => targetID.includes(item.id))
    }


  return (
    <div className="w-full h-28 md:h-[161.46px] grid grid-cols-3 mt-[30px] md:mt-14 ml-8">
        {
            displaySimilarItems(displayItemID).map(prod=>(
                <div key={prod.id} 
                onClick={(e => setDisplayitemId(prod.id))}
                 className="w-[88px] h-[88px] md:w-[105.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center justify-center">
                    <img src={prod.imageUrl} alt="item image" className='h-[80px] w-full object-cover md:h-full'/>
                    <span>{prod.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default SubCartItems
