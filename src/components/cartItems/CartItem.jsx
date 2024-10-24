import card from "../../assets/card1.jpg"
import group from "../../assets/Group.svg"
import Star from "../../assets/Star.svg"
import { useContext, } from "react"
import { UIcontext } from "../contextAPI/UIContext/UiProvider"
import { CartContext } from "../contextAPI/CartContext/CartContext"
import { ProductContext } from "../contextAPI/ProductContext/ProductContext"
import {
  HandleAddItemToCart,
  updateItemsOnFirebase,
} from "../utilityFunctions/utility";
import SubCartItems from "./sub-cartitems";
import Ratings from "./ratings";
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const CartItem = () => {
  const { products } = useContext(ProductContext);
  const { displayItemID } = useContext(UIcontext);
  const {  cartItems, userId,setCartItems } = useContext(CartContext);

    const item = products.find((item) => item.id === displayItemID);
    
    if (!item) {
        return (
          <div className="text-[20px]  mt-4 mb-8 font-semibold text-red-700">Item not found in products</div>
      )
  }
  const { name, price, imageUrl, id } = item;
  const handleItemAdding = async () => {
    
    const updatedCartItems = HandleAddItemToCart(
      cartItems,
      name,
      imageUrl,
      price,
      id
    );
    userId ? updateItemsOnFirebase(updatedCartItems,userId) : setCartItems(updatedCartItems)
  };

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
    <div className="w-full h-full mt-20  md:mt-24 px-5">
      <div className="w-full mt-3">
        <div className=" w-full  md:flex flex-row">

          {/* class  */}
          <div className="w-full md:w-[49%] h-[100%] md:h-[75%] md:gap-[2px] flex flex-col items-center ">
            <div className="w-full h-[360px] border-[0.5px] rounded">
              <img
                src={imageUrl}
                alt="item image"
                className="object-cover w-full h-full rounded"
              />
            </div>
            {/* subcartItems */}
            <SubCartItems card={card} />
          </div>

          {/* items */}
          <div className="w-full h-[402.29px] md:h-[647.42px] md:gap-[24px] mt-[0px] md:pl-8 md:pt-3 md:mt-[0px]">
            <div className="w-full h-[353px] gap-[18px] px-3 mt-3 md:mt-0">
              <div className="h-[70px] w-full md:h-[157px] gap-[16px]">
                <h6 className="hidden md:block">Product</h6>
                <div className="hidden w-[285.72px] h-[48px] bg-[#BAC0C0] rounded-[4px] border-[3px]  px-[8px] py-[12px] md:flex flex-row items-center justify-evenly">
                  <img src={group} alt="image" />
                  <span className="font-medium text-[24px] leading-[28.8px] font-Montserrat">
                    Delivery fee
                  </span>
                  <span className="w-[63.72px] h-[27.91px] rounded-[4.95px] border-[0.25px] px-[4.95px] py-[1.86px] bg-[#001414] text-center text-white border-[#948F8C]">
                    $2
                  </span>
                </div>
                <div className="w-full h-[35px] mb-2  md:mb-0 md:W-[352px] md:h-[37px] gap-[16px]">
                  <h2 className="w-full h-[30px]  md:h-[38px] font-semibold md:text-[32px] text-[18px] leading-[38.4px]">
                    {name}
                  </h2>
                </div>
                {/* ratings */}
                <div className="w-[88px] h-[16px] md:w-[275px] md:h-[43px] flex flex-row items-center">
                  <Ratings Star={Star} />
                  <div className="hidden w-[52px] h-[43px] rounded-[5px] border-[0.3px] py-[5px] px-[10px] md:flex justify-center">
                    <span className="w-[32px] h-[33px] text-[#000000] text-center">
                      2.4
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-full h-[54.29px] md:w-[645.71px] md:h-[114px]  px-[0px] gap-[16px] ">
                <div className="w-[219.35px] h-[54.29px] md:w-[645.7px] md:h-[53px] gap-[16px]">
                  <div className="w-[185px] h-[45px] gap-[12px]">
                    <span className="w-[42px] h-[27px] font-semibold text-[20px] leading-[27.2px]">
                      Price :
                    </span>
                    <span className="w-[126px] h-[45px] rounded-[4px] border-[0.5px] py-[8px] px-[12px]">
                      ${price}
                    </span>
                  </div>
                </div>

                <div className="md:hidden w-full h-[70px] flex flex-col justify-between">
                  <div className="w-[145px] h-[24px] flex flex-row justify-between">
                    <span className="w-[25px] bg-black text-white h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">
                      XL
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">
                      XXL
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">
                      L
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">
                      S
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[6px] border-[0.25px] text-[10px] border-[#B9BFBF] pt-[5.5px] pl-[4px] pb-[5.5px] pr-[5px] text-center">
                      M
                    </span>
                  </div>
                  <div className="w-full h-[33px] flex flex-row rounded-[0.5px] p-[8px] bg-[#E0E7E7] justify-evenly">
                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                      <input type="checkbox" />
                      <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]">
                        Zip
                      </label>
                    </div>
                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                      <input type="checkbox" />
                      <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]">
                        {" "}
                        Button
                      </label>
                    </div>
                    <div className="w-[41px] h-[17px] flex flex-row items-center justify-between">
                      <input type="checkbox" />
                      <label className="font-normal text-[14px] leading-[16.8px] w-[21px] h-[17px]">
                        None
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:hidden w-full h-[40px] bg-white rounded-[4px] border-[1px] px-[8px] py-[12px] mt-2 flex flex-row items-center justify-evenly">
                  <img src={group} alt="image" />
                  <span className="font-medium text-[17px] leading-[28.8px] font-Montserrat">
                    Delivery is not fee
                  </span>
                  <span className="w-[63.72px] h-[27.91px] rounded-[4.95px] border-[0.25px] px-[4.95px] py-[1.86px] bg-[#001414] text-center text-white border-[#948F8C]">
                    $2
                  </span>
                </div>

                <div className="w-[645.71px] h-[51px] hidden md:block">
                  <p>
                    The Cream-Colored Totebag is a blend of elegance and
                    functionality. Crafted from luxurious fabric, its spacious
                    interior accommodates daily essentials. Lig
                  </p>
                </div>
              </div>

              <div className=" w-full h-[53px] md:w-[490.32px] md:h-[159.37px]  mt-[140px] md:mt-[20px] ">
                <div className="mb-4">
                  <select className=" w-full h-[44px] md:w-[500.71px] outline-none border  border-green-100 md:h-[47.05px] rounded-[7.9px] items-center pl-[23.7px] bg-[#EDE7E7]">
                    <option className="text-[#005A59] bg-gray-500 " value="">
                      select your Location
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="hidden md:block w-full bg-gray-400 h-[48px] md:w-[490.32px] mb-3 md:h-[61.8px] rounded-[5.98px] hover:bg-white border-[1.4px] py-[10px] md:py-[19.66px] px-[19.4px] hover:text-black  text-white font-semibold">
                  Buy Now
                </button>

                <div onClick={handleItemAdding}>
                  <button className="w-full justify-center flex align-middle h-[48px] md:w-[490.32px] md:h-[61.8px] rounded-[5.98px] border-[1.4px] bg-black py-[10px] md:py-[19.66px] px-[19.4px]  text-white font-semibold">
                    Add to chart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* react tostify for poping up notification */}
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default CartItem