import { useContext } from "react"
import { UIcontext } from "../../components/contextAPI/UIContext/UiProvider"
import apple from "./assets/apple.svg"
import mastercard from "./assets/mastercard.svg"
import paypal from "./assets/paypal.svg"
import stripe from "./assets/stripe.svg"
import visa from "./assets/visa.svg"
import chips from "./assets/chips.svg"
const PaymentGateWay = () => {
    const {popUp,setPopUp}=useContext(UIcontext)
    if(!popUp) return null;

    const handlePopUpClosure=()=>{
        setPopUp(false)
    }
  return (
   <div className="fixed w-[375px]  md:w-[1400px] md:h-[2076px]  inset-0 bg-opacity-100 bg-black justify-center items-center">
       <div className="flex flex-col justify-center items-center h-full  md:mt-[30px] md:w-[1400px] md:h-[672px] ">
           <div className="bg-[#B9BFBF] w-[387px] h-full md:w-[720px] flex flex-col justify-center items-center md:h-[472px] md:mb-[30px] ">
               <div className=" md:w-[450px] md:h-[113px] md:mt-[10px] flex flex-col items-center">
                   <h2 className="md:w-[450px] md:h-[38px] font-serif md:font-semibold md:text-[32px] leading-[38px] text-center">Payment Method</h2>
                   <p className="hidden md:block md:w-[450px] md:h-[19px] md:font-normal md:text-[16px] leading-[19.2px] text-center" >Effortlessly manage your purchases and checkout with ease</p>
                   
                   <div className="w-[357px] h-[190px] bg-[#03045E] flex flex-col  items-center md:hidden">
                    {/* start */}
                      <div className="w-[340px] h-[30px] flex flex-row justify-between items-center mt-2">
                         <span className="w-[28px] h-[12px] text-[12.7px] font-bold leading-[12.24px] text-center text-white">Debit.</span>
                         <span className="w-[74pxpx] h-[16px] text-[13.32px] font-extrabold leading-[12.24px] text-center text-white">Bank Name</span>
                      </div>
                       {/* start */}
                      <div className="w-[340px] h-[50px] flex flex-col mt-[30px]">
                        <img src={chips} alt="chips" className="w-[27.22px] h-[20.92px]"/>
                        <span className="w-[340px] h-[24px] font-extrabold text-[30.51px] leading-[25.40px] text-white">5355  0348  5945  5045</span>
                      </div>
                       {/* start */}
                      <div className=" w-[340px] h-[50px] flex flex-row mt-[15px] justify-between">
                         <div className="flex flex-col justify-between">
                             <div className="w-[70px] flex flex-row items-center text-white">
                                <p className="w-[15px] h-[12px] text-[5.86px] font-semibold leading-[6.12px]">valid THRU</p>
                                <span className="w-[27px] h-[12px] font-semibold text-[9.75px] leading-[12.24px]">12/24</span>
                             </div>
                             <span className="w-[141px] h-[12px] font-bold text-[11px] leading-[12.24px] text-white">JAMES VICTOR OCHULA</span>
                         </div>
                         <img src={mastercard} alt="mastercard logo" className="w-[44.24px] h-[35.73px] "/>
                      </div>
                   </div>


                   <div className="hidden w-[328px] h-[36px] md:flex flex-row justify-between md:mt-2">
                       <img src={visa} alt="apple-logo" className="md:w-[28px] md:h-[28px]" />
                       <img src={stripe} alt="apple-logo" className="md:w-[28px] md:h-[28px]"/>
                       <img src={mastercard} alt="apple-logo"  className="md:w-[28px] md:h-[28px]"/>
                       <img src={paypal} alt="apple-logo" className="md:w-[18px] md:h-[28px]" />
                       <img src={apple} alt="apple-logo" className="md:w-[18px] md:h-[28px]"/>
                   </div>
               </div>


                <div className="w-[327px] md:w-[390px] h-[179px] mt-[10px] md:mt-0" >
                            <div className="w-[327px] md:w-[390px] h-[70px] flex flex-col justify-between">
                                <h2 className="w-[76px] h-[14px] font-normal text-[12px] text-white leading-[14.09px]">Card Number</h2>
                                <div className=" w-[327px] md:w-[390px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF]">
                                    <input type="number" placeholder="5355 0348 5945 5045" className="w-[327px] h-[48px] pl-2 rounded-[8px] outline-none border-[0.5px] bg-[#F1FFFF]"/>
                                </div>
                            </div>
                            <div className="w-[327px] md:w-[390px] h-[70px] rounded-[8px] flex flex-row justify-between mt-[10px]">
                                <div className="w-[150px] md:w-[190px] h-[70px] flex flex-col justify-between">
                                    <span className="w-[25px] h-[14px] font-medium text-white text-[12px] leading-[14.09px] ">CVV</span>
                                    <input type="number" placeholder="0522" className="w-[150px] md:w-[190px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF] outline-none pl-3"/>
                                </div>
                                <div className="w-[150px] md:w-[156px] h-[70px] flex flex-col justify-between">
                                    <span className="w-[25px] h-[14px] font-medium text-[12px] text-white leading-[14.09px]">Expires</span>
                                    <input type="number" placeholder="05/2024" className="w-[150px] md:w-[155px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF] outline-none pl-3" />
                                </div>
                            </div>
                            <div className="w-[206px] h-[15px] mt-[3px] flex flex-row justify-between">
                                <input type="checkbox"/>
                                <p className="w-[188px] h-[15px] font-normal text-[12px] leading-[14.63px] text-white">Save Your Debit card information</p>
                            </div>
                </div>

                <div onClick={handlePopUpClosure} className="w-[310px] h-[48px] mt-[37px] rounded-[4px]">
                    <button className=" w-[310px] h-[48px] rounded-[4px] bg-black pt-[13px] pl-[118.5px] text-white pb-[13px] pr-[118.5px]">Checkout</button>
                </div>
           </div>
       </div>
   </div>
  )
}

export default PaymentGateWay
