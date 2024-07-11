import React from 'react'
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import AvailableStock from './components/AvailableStock/AvailableStock'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const RootPage = () => {
  return (
    <div className=' bg-[#E0E7E7] relative w-[375px] sm:w-[640px] md:w-[1440px] flex flex-col justify-center items-center'>
           <Header/>
         <div className=''>
           <Outlet/>
         </div>
          <Footer/>
    </div>
  )
}

export default RootPage
