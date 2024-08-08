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
    <div className='hidden md:flex absolute right-24 top-[70px] bg-white px-2 py-1 rounded'>
          <button onClick={handleNavigateToLogin} className='border-r-2 border-black pr-1 hover:text-red-400'>Login</button>
          <button onClick={handleNavigateTosignup} className='pl-1 hover:text-red-400'>SignUp</button>
    </div>
  )
}

export default SignUpLogin
