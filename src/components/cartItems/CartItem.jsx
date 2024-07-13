import card from "../../assets/card1.jpg"
import group from "../../assets/Group.svg"
import Star from "../../assets/Star.svg"
import { useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import { myStates } from "../contextAPI/MyStateProvider"
import { CalculateTotal,HandleAddItemToCart } from "../utilityFunctions/utility"

const CartItem = () => {
    const location=useLocation()
    const {id} =location.state

    
    const apiKey="9b64558aae124747b4097f3966414d6a20240712143239551922"
   const url= `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=763700ddc9a04c94a7ee32f444ad7b90&Appid=WTFTGI54VWY5ESS&Apikey=${apiKey}`
   const {setCartItems,cartItems,singleProduct,setSingleProduct} =useContext(myStates)

    useEffect(() => {
        fetch(url)
        .then(reponse => reponse.json()).then(data => setSingleProduct(data))
    }, [id])
    
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

    const productImage=singleProduct.photos?.[0]?.url;
    
    const {name,price,available_quantity,current_price}=singleProduct;
    
    const imageUrl=`https://api.timbu.cloud/images/${productImage}`
  return (
    <div className="w-[397px] md:w-[1317px]">
        <div className="md:w-[486px] md:h-[78px] md:gap-[8px] hidden md:flex flex-col">
            <span className="font-semibold text-[40px] leading-[48px] text-[#001616] font-Raleway">Your Cart</span>
            <span className="md:font-Monserrat md:text-[18px] md:leading-[21.6px]">Review and manage the items in your shopping cart</span>
        </div>
        <div className="w-[397px] flex h-[410] md:w-[1317px] md:h-[842.95px] mt-3">
             <div className=" md:w-[1213.71px] md:h-[842.46px] md:flex flex-row w-[377px] ">
                <div className="w-[387px] h-[612.46px] md:w-[444px] md:h-[692.46px] md:gap-[2px] flex flex-col  items-center ">
                        <div className="w-[344px] h-[360px] border-[0.5px]">
                           <img src={imageUrl} alt="item image" className="object-cover w-full h-full"/>
                        </div>
                        <div className="w-[296px] h-[88px] md:w-[424px] md:h-[161.46px]  flex flex-row items-center justify-between  mt-[80px]">
                            <div className="w-[88px] h-[88px] md:w-[105.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                                <img src={card} alt="item image"/>
                                <span>Black</span>
                            </div>

                            <div className="w-[88px] h-[88px] md:w-[105.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                                <img src={card} alt="item image"/>
                                <span>Black</span>
                            </div>

                            <div className="w-[88px] h-[88px] md:w-[105.46px] md:h-[159.46px] gap-[6px] flex flex-col items-center">
                                <img src={card} alt="item image"/>
                                <span>Black</span>
                            </div>
                            
                        </div>
                </div>

                {/* items */}
                <div className="w-[397px] h-[402.29px] md:w-[645.71px] md:h-[647.42px] md:gap-[24px] mt-[30px] md:mt-[0px]">
                    <div className="w-[397px] h-[353px] gap-[18px] pl-6">
                        <div className="h-[100px] w-[352px] md:h-[191px] gap-[16px]">
                           <h6 className="hidden md:block">Product</h6>
                            <div className="hidden w-[285.72px] h-[48px] bg-[#BAC0C0] rounded-[4px] border-[3px]  px-[8px] py-[12px] md:flex flex-row items-center justify-evenly">
                               <img src={group} alt="image"/>
                               <span className="font-medium text-[24px] leading-[28.8px] font-Montserrat">Delivery fee</span>
                               <span className="w-[63.72px] h-[27.91px] rounded-[4.95px] border-[0.25px] px-[4.95px] py-[1.86px] bg-[#001414] text-center text-white border-[#948F8C]">$2</span>
                            </div>
                            <div className="w-[124px] h-[60px] md:W-[352px] md:h-[37px] gap-[16px]">
                                 <h2 className=" w-[124px] h-[10px] md:w-[302px] md:h-[38px] font-semibold md:text-[32px] text-[28px] leading-[38.4px]">{name}</h2>
                            </div>
                             {/* ratings */}
                            <div className="w-[88px] h-[16px] md:w-[275px] md:h-[43px] flex flex-row items-center">
                                <div className="md:w-[215px] md:h-[40px] gap-[3.75px] flex flex-row items-center ">
                                    <div className="bg-black w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
                                     <img src={Star} alt="rating"/>
                                    </div>
                                    <div className="bg-black  w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-[3.89px] md:rounded-[8.89px] flex items-center justify-center">
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
                                      <span className="w-[126px] h-[45px] rounded-[4px] border-[0.5px] py-[8px] px-[12px]">₦{current_price}</span>
                                  </div>
                             </div>
                                
                             <div className="md:hidden w-[317px] h-[70px] flex flex-col justify-between">
                                 <div className="w-[145px] h-[24px] flex flex-row justify-between">
                                    <span className="w-[25px] bg-black text-white h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">XL</span>
                                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">XXL</span>
                                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">L</span>
                                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">S</span>
                                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">M</span>
                                 </div>
                                 <div className="w-[317px] h-[33px] flex flex-row rounded-[0.5px] p-[8px] bg-[#E0E7E7] justify-evenly">
                                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                                        <input type="checkbox" />
                                        <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]">Zip</label>
                                    </div>
                                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                                        <input type="checkbox" />
                                        <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]"> Button</label>
                                    </div>
                                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                                        <input type="checkbox" />
                                        <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]">None</label>
                                    </div>
                                 </div>
                             </div>


                             <div className="md:hidden w-[317.72px] h-[40px] bg-white rounded-[4px] border-[1px] px-[8px] py-[12px] mt-2 flex flex-row items-center justify-evenly">
                               <img src={group} alt="image"/>
                               <span className="font-medium text-[17px] leading-[28.8px] font-Montserrat">Delivery is not fee</span>
                               <span className="w-[63.72px] h-[27.91px] rounded-[4.95px] border-[0.25px] px-[4.95px] py-[1.86px] bg-[#001414] text-center text-white border-[#948F8C]">$2</span>
                            </div>


                             <div className="w-[645.71px] h-[51px] hidden md:block">
                                <p>
                                   The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lig
                                </p>
                             </div>
                         </div>

                         <div className="w-[310px] h-[53px] md:w-[490.32px] md:h-[159.37px] gap-[16px] mt-[140px] md:mt-[50px] "> 
                            
                            <button className="hidden md:block w-[310px] h-[48px] md:w-[490.32px] md:h-[61.8px] rounded-[5.98px] border-[1.4px] py-[10px] md:py-[19.66px] px-[19.4px] text-black font-semibold">Buy Now</button>
                        
                            <div onClick={(e => HandleAddItemToCart(cartItems,name,imageUrl,current_price,id,available_quantity,setCartItems))}>
                                <button className="w-[310px] justify-center flex align-middle h-[48px] md:w-[490.32px] md:h-[61.8px] rounded-[5.98px] border-[1.4px] bg-black py-[10px] md:py-[19.66px] px-[19.4px]  text-white font-semibold">Add to chart</button>
                            </div>
                         </div>

                         <div className="">
                            <select className=" w-[310px] h-[44px] md:w-[500.71px] md:h-[47.05px] rounded-[7.9px] items-center pl-[23.7px] bg-[#EDE7E7]">
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
        </div>
    </div>
  )
}

export default CartItem