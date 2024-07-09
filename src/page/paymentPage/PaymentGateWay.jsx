import { useContext } from "react"
import { myStates } from "../../components/contextAPI/MyStateProvider"
const PaymentGateWay = () => {
    const {popUp,setPopUp}=useContext(myStates)
    if(!popUp) return null;

    const handlePopUpClosure=()=>{
        setPopUp(false)
    }
  return (
   <div className="fixed inset-0 bg-opacity-50 bg-black ">
       <div className="flex flex-col justify-center items-center mt-4">
            <div className="w-[327px] h-[179px]">
                    <div className="w-[327px] h-[70px] flex flex-col justify-between">
                        <h2 className="w-[76px] h-[14px] font-normal text-[12px] text-white leading-[14.09px]">Card Number</h2>
                        <div className="w-[327px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF]">
                            <input type="number" placeholder="5355 0348 5945 5045" className="w-[327px] h-[48px] pl-2 rounded-[8px] outline-none border-[0.5px] bg-[#F1FFFF]"/>
                        </div>
                    </div>
                    <div className="w-[327px] h-[70px] rounded-[8px] flex flex-row justify-between mt-[10px]">
                        <div className="w-[156px] h-[70px] flex flex-col justify-between">
                            <span className="w-[25px] h-[14px] font-medium text-white text-[12px] leading-[14.09px] ">CVV</span>
                            <input type="number" placeholder="0522" className="w-[155px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF] outline-none pl-3"/>
                        </div>
                        <div className="w-[156px] h-[70px] flex flex-col justify-between">
                            <span className="w-[25px] h-[14px] font-medium text-[12px] text-white leading-[14.09px]">Expires</span>
                            <input type="number" placeholder="05/2024" className="w-[155px] h-[48px] rounded-[8px] border-[0.5px] bg-[#F1FFFF] outline-none pl-3" />
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
  )
}

export default PaymentGateWay
