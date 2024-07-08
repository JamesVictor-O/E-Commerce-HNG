import React from 'react'
import add from "../../assets/add.svg"
import minus from "../../assets/minus.svg"
import trash from "../../assets/Trash_Full.svg"
import star from "../../assets/Star.svg"
import card from "../../assets/card1.jpg"
import location from "../../assets/location.svg"
import editor from "../../assets/editor.svg"
import creditCard from "../../assets/CreditCard01.svg"
const CheckoutPage = () => {
  return (
    <div className=''> 
      <div className=''>
        <h2 className='w-[73px] h-[19px] mt-[22px] ml-[18px] text-[16px] font-semibold leading-[19.2px]' >Checkout</h2>
        <div className='w-[348px] h-[37px] mt-[30px] ml-[px]'>
            <span className='w-[156px] h-[37px] rounded-[20px] border-[1px] bg-black text-white py-[10px] px-[44px]'>Your order</span>
            <span className='w-[156px] h-[37px] rounded-[20px] border-[#DFDDDC] text-[14px] border-[1px] text-black py-[10px] px-[24px]'>Delivery & Payment</span>
        </div>
        <div  className=' w-[327.45] h-[386px] mt-[40px]'>
            <div className='w-[327.41px] h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
                {/* image */}
                <div className='w-[60.32px] h-[60.32px] border '>
                    <img src={card} alt='item image'/>
                </div>
                {/* details */}
                <div className='w-[113px] h-[59.96px] flex flex-col justify-between items-start'>
                   
                   <div className='w-[113px] h-[37.02px] flex flex-col justify-between '>
                     <h2 className='h-[19px] font-semibold text-[16.03px] leading-[19.3px] '>Cream totebag</h2>
                     <div>
                        <span>1 item</span>
                        <span>* Zip</span>
                     </div>
                   </div>

                   <div className='w-[81.95px] h-[14.9px] flex flex-row justify-between'>
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                   </div>
                </div>

                {/* amount */}
                <div className='w-[89.75px] h-[60px] flex flex-col justify-between items-end'>
                   <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>₦4,000</span>
                   <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                      <div className='w-[61.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                        <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]'/>
                        <span className='w-[15.99px] h-[14.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>1</span>
                        <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px]' />
                      </div>
                      <img src={trash} alt="trash" className='bg-[#EDE7E7] w-[21.13px]'/>
                   </div>
                </div>
            </div>
            <div className='w-[327.41px] h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
                {/* image */}
                <div className='w-[60.32px] h-[60.32px] border '>
                    <img src={card} alt='item image'/>
                </div>
                {/* details */}
                <div className='w-[113px] h-[59.96px] flex flex-col justify-between items-start'>
                   
                   <div className='w-[113px] h-[37.02px] flex flex-col justify-between '>
                     <h2 className='h-[19px] font-semibold text-[16.03px] leading-[19.3px] '>Cream totebag</h2>
                     <div>
                        <span>1 item</span>
                        <span>* Zip</span>
                     </div>
                   </div>

                   <div className='w-[81.95px] h-[14.9px] flex flex-row justify-between'>
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                   </div>
                </div>

                {/* amount */}
                <div className='w-[89.75px] h-[60px] flex flex-col justify-between items-end'>
                   <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>₦4,000</span>
                   <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                      <div className='w-[61.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                        <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]'/>
                        <span className='w-[15.99px] h-[14.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>1</span>
                        <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px]' />
                      </div>
                      <img src={trash} alt="trash" className='bg-[#EDE7E7] w-[21.13px]'/>
                   </div>
                </div>
            </div>
            <div className='w-[327.41px] h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
                {/* image */}
                <div className='w-[60.32px] h-[60.32px] border '>
                    <img src={card} alt='item image'/>
                </div>
                {/* details */}
                <div className='w-[113px] h-[59.96px] flex flex-col justify-between items-start'>
                   
                   <div className='w-[113px] h-[37.02px] flex flex-col justify-between '>
                     <h2 className='h-[19px] font-semibold text-[16.03px] leading-[19.3px] '>Cream totebag</h2>
                     <div>
                        <span>1 item</span>
                        <span>* Zip</span>
                     </div>
                   </div>

                   <div className='w-[81.95px] h-[14.9px] flex flex-row justify-between'>
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                   </div>
                </div>

                {/* amount */}
                <div className='w-[89.75px] h-[60px] flex flex-col justify-between items-end'>
                   <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>₦4,000</span>
                   <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                      <div className='w-[61.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                        <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]'/>
                        <span className='w-[15.99px] h-[14.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>1</span>
                        <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px]' />
                      </div>
                      <img src={trash} alt="trash" className='bg-[#EDE7E7] w-[21.13px]'/>
                   </div>
                </div>
            </div>
            <div className='w-[327.41px] h-[84.76px] pt-[8.04px] pl-[8.04] pb-[16px] flex flex-row items-center justify-between'>
                {/* image */}
                <div className='w-[60.32px] h-[60.32px] border '>
                    <img src={card} alt='item image'/>
                </div>
                {/* details */}
                <div className='w-[113px] h-[59.96px] flex flex-col justify-between items-start'>
                   
                   <div className='w-[113px] h-[37.02px] flex flex-col justify-between '>
                     <h2 className='h-[19px] font-semibold text-[16.03px] leading-[19.3px] '>Cream totebag</h2>
                     <div>
                        <span>1 item</span>
                        <span>* Zip</span>
                     </div>
                   </div>

                   <div className='w-[81.95px] h-[14.9px] flex flex-row justify-between'>
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                        <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                           <img src={star} alt="rating" /> 
                        </div> 
                   </div>
                </div>

                {/* amount */}
                <div className='w-[89.75px] h-[60px] flex flex-col justify-between items-end'>
                   <span className='w-[46.21px] h-[18px] text-[11.21px] leading-[17.93px]  font-bold'>₦4,000</span>
                   <div className='w-[89.17px] h-[24.13px] flex flex-row justify-between'>
                      <div className='w-[61.61px] h-[24.13px] flex flex-row items-center rounded-[4.02px] border-[0.5px] p-[4.57px] bg-[#EDE7E7]'>
                        <img src={add} alt='addition sign' className='w-[14.99px] h-[14.99px]'/>
                        <span className='w-[15.99px] h-[14.99px] rounded-[3.7px] p-[5px] flex items-center text-[15px]'>1</span>
                        <img src={minus} alt="minus sign" className='w-[14.99px] h-[14.99px]' />
                      </div>
                      <img src={trash} alt="trash" className='bg-[#EDE7E7] w-[21.13px]'/>
                   </div>
                </div>
            </div>
        </div>


        <div className='w-[327px] h-[180px] border-[05px]'>
            <div className='w-[140px] h-[20px] ml-[16px] mt-[17px] flex flex-row'>
                <img src={location} alt="location" />
                <span className='w-[116px] h-[15px] text-[14px] leading-[16.44px]'>Delivery Location</span>
            </div>
            <div className='w-[226px] h-[42px] mt-[29px] ml-[50px] flex flex-row items-center border-[0.3px] px-[10px] py-[12px] '>
                <div className='w-[22px] h-[22px] rounded-[4px] p-[4px] bg-[#EDD7E7]'>
                    <img src={add} alt="add"/> 
                </div>
                <p className='text-[10px] font-medium ml-1 leading-[11.74px] w-[186px]'>Add Your Location and well descriptive</p>
            </div>
            <button className=' flex flex-row w-[59px] h-[34.62px] ml-[255px] mt-[20px] rounded-[4px] px-[4px] items-center bg-black '>
                <div>
                    <img src={editor} alt="editor" />
                </div>
                <span className='text-white'>Edit</span>
            </button>
        </div>

        <div className='w-[327.21px] h-[149px] mt-[35px]  border-t-[2px] border-r-0 border-l-0 border-b-0'>
            <div className='w-[325.21px] h-[115px] px-0 py-[6px]'>
                <div className='w-[325.21px] flex flex-row justify-between items-center mb-4'>
                    <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>SubTotal</span>
                    <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>₦4,000</span>
                </div>
                <div className='w-[325.21px] flex flex-row justify-between items-center mb-4'>
                    <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Zip(s)</span>
                    <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>₦1,000</span>
                </div>
                <div className='w-[325.21px] flex flex-row justify-between items-center mb-4'>
                    <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Delivery</span>
                    <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>₦4,000</span>
                </div>
            </div>
            <div className='w-[325.21px] flex flex-row justify-between items-center mb-2 border-t-2 border-b-2 pt-[5px] pb-[5px]'>
                <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Total</span>
                <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>₦4,000</span>
            </div>
        </div>

        <div  className='w-[327px] h-[32px] rounded-[2px] border-[0.5px] pt-[8px] pr-[197px] pb-[8px] pl-[8px] mt-4 flex flex-row'>
             <span className='text-[12px] font-normal leading-[12px] align-middle'>Payment Options</span>
             <div className='w-[16px] h-[16px]'>
                <img src={creditCard} alt="" />
             </div>
        </div>

        <button className='w-[328px] h-[56px] rounded-[24px] border-[0.74px] pt-[17px] pl-[85px] pb-[17px] pr-[85px] mt-[80px]'>
            Proceed to CheckOut
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
