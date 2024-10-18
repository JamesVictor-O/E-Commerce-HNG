import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../contextAPI/CartContext/CartContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

const SignUpLogin = ({ setIsclickedOn, isClickedOn }) => {
  
  const { setIsLoggedIn,isLoggedIn } = useContext(CartContext);
  
  const handleOpenClose = (value) => {
    setIsclickedOn(!value);
  };

  const handleLogOut = (value) => {
    setIsclickedOn(!value);
    signOut(auth).then(() => {
    //  setIsLoading(false)
     setIsLoggedIn(false)
 }).catch((err) => {
   console.log(err)
  //  setIsLoading(false)
   })

}
  return (
    <>
    

      {/* mobile */}
      <div
        className={`flex items-center md:hidden absolute w-[50%] bg-white flex-col h-screen bottom-0 top-14 right-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
        ${
          isClickedOn
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* link to home */}
        <Link to={"/"} onClick={() => handleOpenClose(isClickedOn)}>
          <h2 className="bg-blue-300 mt-9 py-1 px-4 text-center text-white rounded w-full flex justify-center items-center">
            Home
          </h2>
        </Link>
        {/* link to shop items */}
        <Link to={"/shop"} onClick={() => handleOpenClose(isClickedOn)}>
          <h2 className="bg-blue-300 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center">
            Shop
          </h2>
        </Link>

        <div>
          {/* sign out */}
          { isLoggedIn ? ( <div>
            <button  onClick={() => handleLogOut(isClickedOn)} className="bg-red-400 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center">
                Sign Out
            </button>
          </div>) : ( <div>
            <Link to={"login"} onClick={() => handleOpenClose(isClickedOn)}>
              <h2 className="bg-blue-300 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center">
                Login
              </h2>
            </Link>
            <Link to={"signup"} onClick={() => handleOpenClose(isClickedOn)}>
              <h2 className="bg-red-500 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center">
                Sign Up
              </h2>
            </Link>
          </div>)}
         
          {/* sign up and login */}
         
        </div>
      </div>
    </>
  );
}

export default SignUpLogin
