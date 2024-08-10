import React from 'react'
import ItemDetails from '../ItemDetails/itemDetails'
import minus from "../../../assets/minus.svg"
import trash from "../../../assets/Trash_Full.svg"
import add from "../../../assets/add.svg"
import card from "../../../assets/card1.jpg"

import { useContext } from 'react'
import { CartContext } from '../../../components/contextAPI/CartContext/CartContext'
import { ProductContext } from '../../../components/contextAPI/ProductContext/ProductContext'
import { CalculateTotal } from '../../../components/utilityFunctions/utility'
const Items = ({product}) => {

    const {cartItems,setCartItems}=useContext(CartContext)
    const {setProductTotal}=useContext(ProductContext)
    const { available_quantity,id,price,imageUrl}=product

    const handleItemAddition=()=>{
       const upDatedProduct=cartItems.map(product=>
            product.id === id ? {...product, available_quantity:product.available_quantity+1} : product
        )
        setCartItems(upDatedProduct)
        setProductTotal(CalculateTotal(upDatedProduct))
    }
    const handleItemReduction=()=>{
        const upDatedProduct=cartItems.map(product=>
            product.id === id ? {...product, available_quantity:Math.max(available_quantity-1,1)} : product
        )
        setCartItems(upDatedProduct)
        setProductTotal(CalculateTotal(upDatedProduct))
    }
    const handleRemoveItem=()=>{
        const newProductList=cartItems.filter(product=>(
            product.id !== id
        ))
         setCartItems(newProductList)
         setProductTotal(CalculateTotal(newProductList))
    }
  return (
    <div className=' md:w-[863.88px] md:h-[180px] w-[327.41px] mb-6 border pr-4 md:pr-1 bg-white border-gray-200 rounded-[10px] md:mr-4 h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
            {/* image */}
            <div className='w-[60.32px] h-[60.32px] ml-2 flex flex-row md:w-[332.02px] md:h-[140px] md:ml-3'>
                <img src={imageUrl} 
                alt='item image'
                className='w-[60.32px] h-[60.32px] md:w-[128.02px] md:h-[140px]'
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                  }}
                />
                    {/* Details */}
                    <ItemDetails product={product}/>
            </div>
            

            {/* amount */}
        <div className='md:w-[421.85px] md:h-[48px] w-[89.75px] h-[60px] flex flex-col justify-between items-end md:flex-row-reverse md:items-center '>
            <img src={trash} alt="trash" onClick={handleRemoveItem} className='bg-black w-[21.13px] mr-8 hidden md:block p-[4px]'/>
            <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>₦{product.price * product.available_quantity}</span>
            <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                <div className='w-[70.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                    <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]' onClick={handleItemAddition} />
                    <span className='w-[24.9px] h-[19.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>{product.available_quantity}</span>
                    <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px] ' onClick={handleItemReduction}/>
                </div>
                <img src={trash} onClick={handleRemoveItem} alt="trash" className=' bg-[#EDE7E7] w-[21.13px] md:hidden hover:bg-red-500'/>
            </div>
        </div>
    </div>
  )
}

export default Items
