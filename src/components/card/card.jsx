import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate

const Card = ({product}) => {
    const {name,current_price,photos,id,available_quantity}=product
    
    const price=current_price[0].NGN[0]
    const productImage=photos.map(photo => photo.url);
    const imageUrl=`https://api.timbu.cloud/images/${productImage}`

    const navigate=useNavigate()
    const handleNavigation=()=>{
       navigate("cartItem",{state:{name,price,imageUrl,available_quantity,id}})
    }
    
  return (
    <div className='w-[156px] bg-white h-[236px] flex flex-col justify-between items-center md:w-[312px] md:h-[426px] rounded-[10px]' onClick={handleNavigation}>
       <div className='w-[156px] h-[170px] md:w-[250px] md:h-[339px]'>
         <img src={imageUrl}
          alt='itemImage'
          className='object-cover md:object-full w-full h-full md:mt-6'
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/150'; // Fallback image
          }}
         />
       </div>
       <div className='flex justify-between items-center w-[140px] h-[36px] md:w-[250px] md:h-[330px]'>
          <span className='font-normal text-[16px] leading-[19.2px]'>{name}</span>
          <span className='font-bold text-[14px] leading-[17.07px]'>₦{price}</span>
       </div>
    </div>
  )
}

export default Card
