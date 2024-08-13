import React from 'react'
import { auth } from '../../firebase'

const SignoutProfile = ({ setIsclickedOn}) => {
    const handlesigeOut = () => {
        setIsclickedOn(prev=> !prev)
        auth.signOut()
    }
    return (
      <>
      <div className='hidden md:flex absolute right-24 top-[70px] bg-white px-2 py-1 rounded'>
          <button  className='border-r-2 border-black pr-1 hover:text-red-400'>Profile</button>
          <button className='pl-1 hover:text-red-400'>SignOut</button>
      </div>
      
             {/* mobile */}
      <div className='flex items-center md:hidden absolute w-[50%] bg-white justify-center flex-col h-[10%] top-10 right-[70px] rounded-l-[10px] rounded-lb-[10px] rounded-rb-[10px]'>
          <button className='bg-red-400 pr-1 hover:bg-red-200 w-[50%] rounded text-white mb-2'>Profile</button>
          <button className='bg-red-400 pr-1 hover:bg-red-200 w-[50%] rounded text-white' onClick={handlesigeOut}>SignOut</button>
      </div>
      </>
  )
}

export default SignoutProfile
