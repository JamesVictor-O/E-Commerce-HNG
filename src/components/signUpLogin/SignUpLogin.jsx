import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpLogin = ({ setIsclickedOn,isClickedOn }) => {
    const navigate = useNavigate()
    const handleNavigateToLogin = () => {
        setIsclickedOn(prev=> !prev)
        navigate("login")
    }
    const handleNavigateTosignup = () => {
        setIsclickedOn(prev=> !prev)
        navigate("signup")
  }
  useEffect(() => {
    document.body.style.overflow= isClickedOn ? "hidden" : "auto"
  },[isClickedOn])
  return (
    <>
      <div className='hidden md:flex absolute right-24 top-[70px] bg-white px-2 py-1 rounded'>
          <button onClick={handleNavigateToLogin} className='pl-1 hover:text-red-400'>SignUp</button>
      </div>
      
      {/* mobile */}
      <div  className={`flex items-center md:hidden absolute w-[50%] bg-white flex-col h-screen bottom-0 top-14 right-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
        ${isClickedOn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <Link to={"/"} >
          <h2 className='bg-blue-300 mt-9 py-1 px-4 text-center text-white rounded w-full flex justify-center items-center'>Home</h2>
        </Link>
        <Link to={'/shop'} >
          <h2  className='bg-blue-300 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center'>Shop</h2>
        </Link>
        <Link to={'login'}>
          <h2 className='bg-blue-300 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center' >Login</h2>
        </Link>
        <Link to={'signup'}>
          <h2 className='bg-red-500 mt-3 py-1 px-4 text-white rounded w-full flex justify-center items-center'>Sign Up</h2>
        </Link>
      </div>
    </>
  )
}

export default SignUpLogin
