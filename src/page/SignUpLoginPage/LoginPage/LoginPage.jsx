import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UIcontext } from "../../../components/contextAPI/UIContext/UiProvider";
import { auth, db} from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../components/contextAPI/CartContext/CartContext";

const LoginPage = () => {
  const { setCurrentUser,setIsLoggedIn } = useContext(UIcontext)
  const { cartItems,setCartItems } = useContext(CartContext)
  
  const navigate = useNavigate()
  
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password:""
  })

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]:value
    })
    
  }

  // handling login with firebase
  const handleSubmit = async (e) => {
  
    e.preventDefault()
    try {
     const userInfo= await signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
      const user = userInfo.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef)
      
      if (userSnap.exists()) {
        const items = userSnap.data().cartItems;
      } else {
        console.log("no such data")
      }

      setLoginDetails({})
      setIsLoggedIn(prev=> !prev)
      navigate('/')

    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className="h-screen md:h-96 flex flex-col pt-12 md:mt-0 md:justify-center w-full align-middle items-center ">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-[25px] underline font-serif font-medium">Login</h2>
        <p className="font-thin">Login with your email and password</p>
      </div>
      <form className="flex flex-col w-[70%]  md:w-[20%]" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="flex flex-col items-start mb-5">
          <label className=" text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Email{" "}
          </label>
          <input
            name="email"
            onChange={handleOnchange}
            value={loginDetails.email}
            type="email"
            placeholder="input your email address"
            className="p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        {/* password */}
        <div className="flex flex-col items-start ">
          <label className="  text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Password
          </label>
          <input
            onChange={handleOnchange}
            value={loginDetails.password}
            name="password"
            type="password"
            placeholder="input your Password"
            className="p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-7 bg-red-300 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
