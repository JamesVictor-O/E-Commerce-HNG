
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UIcontext } from "../contextAPI/UIContext/UiProvider";
import { CartContext } from "../contextAPI/CartContext/CartContext";
import { HandleAddItemToCart,updateItemsOnFirebase } from "../utilityFunctions/utility";

const CategoryItems = ({ product}) => {
  const {setDisplayitemId,} = useContext(UIcontext)
  const {setCartItems,userId,cartItems} = useContext(CartContext)
 
  const {name,imageUrl,price,id}=product

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/cartItem");
    setDisplayitemId(product.id)
  };

  const handleItemAdding=()=>{
    const updatedCartItems= HandleAddItemToCart(cartItems,name,imageUrl,price,id,)
    userId ? updateItemsOnFirebase(updatedCartItems,userId) : setCartItems(updatedCartItems)
  }
  return (
    <div className="min-h-[330px] w-[95%] md:h-[430px] rounded border border-gray-500 mb-4">
      <div className="w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt=""
          className="w-full object-fill md:object-cover h-60 md:h-80 "
        />
      </div>
      <div className="p-2 flex flex-col md:justify-between">
        <div className="flex flex-row justify-between md:mt-2 items-center mb-2 px-2">
          <span className="text-black text-[13px] font-normal md:text-[15px] md:font-medium font-sans">
            {product.name}
          </span>
          <span className="border border-gray-400  text-gray-600 font-bold p-1 rounded-[10px]">
            ${product.price}
          </span>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center">
          <button onClick={handleNavigation} className="bg-black text-xs md:text-sm hover:bg-gray-400 hover:text-black text-white rounded-full py-2 px-6  font-thin">
            Shop Now
          </button>
          <button onClick={()=>handleItemAdding()} className="text-xs  text-black border hover:bg-gray-400 border-black rounded-full py-2 px-6 font-medium">
            Add to Cart
          </button>
        </div>
        {/* for mobile */}
        <button onClick={handleNavigation} className= "md:hidden hover:bg-black bg-gray-400 text-black hover:text-white rounded-full py-[5px] px-6 ">
            Shop Now
          </button>
      </div>
    </div>
  );
};

export default CategoryItems;
