import Items from './Items/Items'
import add from "../../assets/add.svg"
import location from "../../assets/location.svg"
import editor from "../../assets/editor.svg"
import creditCard from "../../assets/CreditCard01.svg"
import  warning from "../../assets/warning.svg"
import PaymentGateWay from '../paymentPage/PaymentGateWay'
import { useContext, useEffect } from 'react'
import { UIcontext } from '../../components/contextAPI/UIContext/UiProvider'
import { CartContext } from '../../components/contextAPI/CartContext/CartContext'
import { CalculateTotal } from '../../components/utilityFunctions/utility'



const CheckoutPage = () => {
    const {productTotal, userId,setProductTotal,cartItems}=useContext(CartContext)
    const {setPopUp,delivery}=useContext(UIcontext)

    const handlePopUp=()=>{
        setPopUp(true)
     }
    useEffect(()=>{
        setProductTotal(CalculateTotal(cartItems))
    }, [cartItems, setProductTotal])
    
 
  return (
    <div className='w-full'> 
        {cartItems.length === 0 ? (
            <div className="w-full mt-[20px]  h-screen flex-row justify-center items-center font-normal md:font-extrabold text-[35px] md:text-[50px]">
               <h2>Your cart is empty</h2>
            </div>
        ):(
          <>
            <div className='relative w-full h-full mb-6  mt-20 md:px-6 px-3    no-scrollbar'>
                    <h2 className='md:hidden w-[73px] h-[19px] md:mt-[22px] ml-[18px] text-[16px] font-semibold leading-[19.2px]' >Checkout</h2>

                    <div className='hidden md:flex w-[500px] h-[78px] flex-col'>
                        <h2 className='md:flex w-[500px] h-[48px] mt-[22px]  text-[40px] font-semibold leading-[48px]' >Shopping Cart</h2>
                        <p className='text-[18px] font-normal'>Effortlessly manage your purchases and checkout with ease</p>
                    </div>

                    
                    <div className='w-full h-[37px] mt-[30px] ml-[px] md:hidden items-center justify-center'>
                        <span className='w-[150px] h-[37px] rounded-[20px] border-[1px] bg-black text-[12px] text-white py-[10px] px-[44px]'>Your order</span>
                        <span className='w-[150px] h-[37px] rounded-[20px] border-[#ffdac7] text-[12px] border-[1px] text-black py-[10px] px-[24px]'>Delivery & Payment</span>
                   </div>

                   <div className='flex flex-col w-full md:flex-row md:mt-[40px] items-center '>
                        <div  className=' w-full  mt-[40px]  h-full'>
                                {cartItems.map(product=>(
                                    <Items key={product.id} product={product}/>
                                ))}
                        </div>


                        <div className=' w-[90%]  md:top-8 md:mr-10'>
                            <div className='md:hidden w-full h-[180px] border-[4px]  border-white '>
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

                            <div className='w-full h-[149px] border-t-[2px] border-r-0 border-l-0 border-b-0 md:border-t-0 '>
                                <h2 className='w-[180px] h-[29px] font-bold text-[24px] leading-[28.8px] mb-4'>Order Summary</h2>
                                <div className='w-full h-[115px] px-0 py-[6px]'>
                                    <div className='w-full flex flex-row justify-between items-center mb-4'>
                                        <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>SubTotal</span>
                                        <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>${productTotal}</span>
                                    </div>
                                    <div className='w-full flex flex-row justify-between items-center mb-4'>
                                        <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Zip(s)</span>
                                        <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>$0</span>
                                    </div>
                                    <div className='w-full flex flex-row justify-between items-center mb-4'>
                                        <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Delivery</span>
                                        <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>${delivery}</span>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row justify-between items-center mb-2 border-t-4 border-b-4 pt-[5px] pb-[5px]'>
                                    <span className='w-[60px] h-[17px] font-normal text-[14px] leading-[17.07px]'>Total</span>
                                    <span className='w-[63.21px] h-[18px] font-bold text-[14.2px]'>${productTotal + delivery}</span>
                                </div>

                                <div className='hidden md:flex w-[327px] h-[57.89px] rounded-[8px] border-[0.49px] pl-[4px]'>
                                    <div className='w-[20.68px] h-[29.6px] pt-[2.96px] pl-[0px] pb-[2.96px]'>
                                        <img src={warning} alt="" />
                                    </div>
                                    <p className='w-[308px] h-[50px] font-normal leading-[25.26px] text-[15.79px] '>Please your totebag will be delivered in three to five working days</p>
                                </div>
                            </div>

                            <div  className='md:hidden w-full h-[32px] rounded-[2px] border-[0.5px] pt-[8px] pr-[197px] pb-[8px] pl-[8px] mt-14 flex flex-row'>
                                <span className='text-[12px] font-normal leading-[12px] align-middle'>Payment Options</span>
                                <div className='w-[16px] h-[16px]'>
                                    <img src={creditCard} alt="" />
                                </div>
                            </div>

                            <button onClick={handlePopUp} className='w-full hover:bg-black hover:text-white h-[56px] rounded-[24px] border-[0.74px] pt-[17px] pl-[85px] pb-[17px] pr-[85px] mt-[30px] md:mt-[120px] bg-white'>
                               Proceed to CheckOut
                            </button>
                        </div>
                   </div>

            </div>
            <PaymentGateWay/>
          </>
        )}
    </div>
  )
}

export default CheckoutPage
