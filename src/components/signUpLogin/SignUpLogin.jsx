import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpLogin = ({ setIsclickedOn }) => {
    const navigate = useNavigate()
    const handleNavigateToLogin = () => {
        setIsclickedOn(prev=> !prev)
        navigate("login")
    }
    const handleNavigateTosignup = () => {
        setIsclickedOn(prev=> !prev)
        navigate("signup")
    }
  return (
    <>
    <div className='hidden md:flex absolute right-24 top-[70px] bg-white px-2 py-1 rounded'>
          <button onClick={handleNavigateToLogin} className='border-r-2 border-black pr-1 hover:text-red-400'>Login</button>
          <button onClick={handleNavigateTosignup} className='pl-1 hover:text-red-400'>SignUp</button>
      </div>
      
      {/* mobile */}
      <div className='flex items-center md:hidden absolute w-[50%] bg-white justify-center flex-col h-[10%] top-10 right-[70px] rounded-l-[10px] rounded-lb-[10px] rounded-rb-[10px]'>
          <button onClick={handleNavigateToLogin} className='bg-red-400 pr-1 hover:bg-red-200 w-[50%] rounded text-white mb-2'>Login</button>
          <button onClick={handleNavigateTosignup} className='bg-red-400 pr-1 hover:bg-red-200 w-[50%] rounded text-white'>SignUp</button>
      </div>
    </>
  )
}

export default SignUpLogin
