import card from "../../assets/card1.jpg"
import group from "../../assets/Group.svg"
import Star from "../../assets/Star.svg"
import { useLocation } from "react-router-dom"
const CartItem = () => {
    const location=useLocation()
    const {bagName,bagPrice,bagImage} =location.state
    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "China",
        "India",
        "Brazil",
        // Add more countries as needed
      ];
  return (
    <div className="relative w-[347px] md:w-[1,313.71px] md:h-[4359.5] md:top-[2px] md:left-[10px] md:gap-[24px]">
        <div className="md:w-[486px] md:h-[78px] md:gap-[8px] hidden md:flex flex-col">
            <span className="font-semibold text-[40px] leading-[48px] text-[#001616] font-Raleway">Your Cart</span>
            <span className="md:font-Monserrat md:text-[18px] md:leading-[21.6px]">Review and manage the items in your shopping cart</span>
        </div>
        <div className="w-[377px] flex h-[410] md:w-[1213.71px] md:h-[4,257.95px] md:gap-[48px] mt-3">
           <div className=" md:w-[1213.71px] md:h-[842.46px] md:flex justify-around flex-row">
                {/* cart item */}
               <div className="w-[377px] h-[562.46px]  md:w-[444px] md:h-[842.46px] md:gap-[2px] flex flex-col items-center">
                    <div>
                       <img src={bagImage} alt="item image"/>
                    </div>
                    <div className="w-[296px] h-[88px] md:w-[437px] md:h-[250.46px]  gap-[16px] flex flex-row items-center justify-center mt-[20px]">
                        <div className="w-[88px] h-[88px] md:w-[125.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                          <img src={card} alt="item image"/>
                          <span>Black</span>
                        </div>
                        <div className="w-[88px] h-[88px] md:w-[125.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                          <img src={card} alt="item image"/>
                          <span>Black</span>
                        </div>
                        <div className="w-[88px] h-[88px] md:w-[125.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                          <img src={card} alt="item image"/>
                          <span>Black</span>
                        </div>
                        
                    </div>
               </div>

               {/* item details */}
                <div className=" w-[327px] h-[382.29px] md:w-[645.71px]  ml-6 md:h-[447.42px] md:gap-[24px] mt-[30px] md:mt-[0px]">
                    <div className="w-[445.71px] h-[353px] gap-[18px]">
                        <div className="h-[100px] w-[352px] md:h-[191px] gap-[16px]">
                           <h6 className="hidden md:block">Product</h6>
                            <div className="hidden w-[285.72px] h-[48px] bg-[#BAC0C0] rounded-[4px] border-[1px] px-[8px] py-[12px] md:flex flex-row items-center justify-evenly">
                               <img src={group} alt="image"/>
                               <span className="font-medium text-[24px] leading-[28.8px] font-Montserrat">Delivery fee</span>
                               <span className="w-[63.72px] h-[27.91px] rounded-[4.95px] border-[0.25px] px-[4.95px] py-[1.86px] bg-[#001414] text-center text-white border-[#948F8C]">$2</span>
                            </div>
                            <div className="w-[124px] h-[60px] md:W-[352px] md:h-[37px] gap-[16px]">
                                 <h2 className=" w-[124px] h-[10px] md:w-[352px] md:h-[38px] font-semibold text-[32px] leading-[38.4px]">{bagName}</h2>
                            </div>
                             {/* ratings */}
                            <div className="w-[88px] h-[16px] md:w-[275px] md:h-[43px] flex flex-row items-center">
                                <div className="md:w-[215px] md:h-[40px] gap-[3.75px] flex flex-row items-center ">
                                    <div className="bg-black w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                
                                    
                                </div>
                                <div className="hidden w-[52px] h-[43px] rounded-[5px] border-[0.3px] py-[5px] px-[10px] md:flex justify-center">
                                    <span className="w-[32px] h-[33px] text-[#000000] text-center">
                                      2.4
                                     </span>
                                </div>
                            </div>
                        </div>
                         
                         <div className=" w-[219.35px] h-[54.29px] md:w-[645.71px] md:h-[114px] py-[12px] px-[0px] gap-[16px]">
                             <div className="w-[219.35px] h-[54.29px] md:w-[645.7px] md:h-[53px] gap-[16px]">
                                  <div className="w-[185px] h-[45px] gap-[12px]">
                                      <span className="w-[42px] h-[27px] font-semibold text-[20px] leading-[27.2px]">Price :</span>
                                      <span className="w-[126px] h-[45px] rounded-[4px] border-[0.5px] py-[8px] px-[12px]">{bagPrice}</span>
                                  </div>
                             </div>

                             <div className="w-[645.71px] h-[51px] hidden md:block">
                                <p>
                                   The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lig
                                </p>
                             </div>
                         </div>

                         <div className="w-[310px] h-[112px] md:w-[490.32px] md:h-[159.37px] gap-[16px] mt-[50px]"> 
                            
                            <button className=" w-[310px] h-[48px] md:w-[490.32px] md:h-[61.8px] rounded-[5.98px] border-[1.4px] py-[10px] md:py-[19.66px] px-[19.4px] text-black font-semibold">Buy Now</button>
                        
                            <div>
                                <button className="w-[310px] justify-center flex align-middle h-[48px] md:w-[490.32px] md:h-[61.8px] rounded-[5.98px] border-[1.4px] bg-black py-[10px] md:py-[19.66px] px-[19.4px]  text-white font-semibold mt-[10px]">Add to chart</button>
                            </div>
                         </div>
                         <div className="">
                            <select className=" w-[310px] h-[44px] md:w-[645.71px] md:h-[47.05px] rounded-[7.9px] items-center pl-[23.7px] bg-[#EDE7E7]">
                            <option className="text-[#005A59] " value="">select your Location</option>
                            {countries.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                            </select>
                         </div>
                    </div>
                </div>
           </div>
        
            {/* discription */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default CartItem