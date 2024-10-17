import React, { useState, useContext, useEffect } from "react";
import navBar from "./../../../assets/nav.svg";
import cartIcon from "./../../../assets/CartIcon.svg";
import user from "./../../../assets/User_03.svg";
import humbugerIcon from "./../../../assets/humbuger.png";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contextAPI/CartContext/CartContext";
import { UIcontext } from "../../contextAPI/UIContext/UiProvider";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { ClipLoader } from "react-spinners";


const MenuBar = ({ setIsclickedOn, isClickedOn }) => {
  const { cartItems,setIsLoggedIn,isLoggedIn } = useContext(CartContext);
  const [ isLoading, setIsLoading ] = useState(false);
  
  // const {isLoggedIn}=useContext(UIcontext);

  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(`${route}`);
  };
  const handleOpenClose = (value) => {
    setIsclickedOn(!value);
  };

  
  const handleLogOut = () => {
       setIsLoading(true)
       signOut(auth).then(() => {
        setIsLoading(false)
        setIsLoggedIn(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      })
   
  }
  // effect to stop web scrolling when navbar is open
  useEffect(() => {
    document.body.style.overflow = isClickedOn ? "hidden" : "auto";
  }, [isClickedOn]);

  return (
    <div className="w-full flex justify-between items-center border-b border-[#5a5757] pb-2 md:pb-5 md:px-5">
      {/* navbars */}
      <div className="hidden md:flex  flex-row justify-between w-28 h-8 text-lg font-normal cursor-pointer">
        <span
          onClick={() => handleNavigation("/")}
          className="hover:border-b-2 border-black  pb-2"
        >
          Home
        </span>
        <span
          onClick={() => handleNavigation("shop")}
          className="hover:border-b-2 border-black  pb-2"
        >
          Shop
        </span>
      </div>

      {/* logo */}
      <div
        onClick={() => handleNavigation("/")}
        className=" w-full md:w-[311px]  md:h-[43px] max-w-full"
      >
        <img src={navBar} alt="Nav bar" className="w-[80%] md:w-full" />
      </div>

      {/* profile and cart logo */}
      <div className="flex flex-row justify-between align-middle items-center w-[20%]  md:w-56  md:h-[36px] ">
        {/* sign up and login  for deskstop*/}
        <div className="hidden md:flex  px-2 py-1 rounded">
          {isLoggedIn ? (
              <button onClick={handleLogOut} className=" px-2 py-1 text-white bg-red-400 rounded-lg hover:bg-blue-300">
                {isLoading ? <ClipLoader color="white"/>: "LogOut" }
              </button>
          ) :
          (
            <div className="">
              <Link to={'login'} className=" px-2 py-1 text-white bg-blue-400 rounded-lg hover:bg-blue-300">
                LogIn
              </Link>
              <Link to={"signup"} className=" px-2 py-1 text-white bg-blue-400 rounded-lg ml-2 hover:bg-blue-300">
                SignUp
              </Link>
            </div>
          )
        
        }

          
        </div>

        {/* cart items icon */}
        <div className="relative">
          <div className="bg-black w-[20px] h-[20px] absolute  p-1 rounded-[50%] left-4 bottom-5 flex items-center justify-center">
            <span className="text-white font-semibold">{cartItems.length}</span>
          </div>
          <img
            onClick={() => handleNavigation("checkout")}
            src={cartIcon}
            alt="cartIcon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px]"
          />
        </div>

        {/* profile picture */}
        <div>
          <img
            src={user}
            alt="user Icon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px] md:flex hidden"
          />
          <img
            src={humbugerIcon}
            onClick={() => handleOpenClose(isClickedOn)}
            alt="user Icon"
            className="w-[24px] h-[30pz] md:w-[36px] md:h-[36px] md:hidden flex"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
