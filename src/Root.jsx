import React from 'react'
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import AvailableStock from './components/AvailableStock/AvailableStock'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const RootPage = () => {
  return (
    <div className=' bg-[#E0E7E7] w-[100%] flex flex-col justify-center items-center min-h-screen p-4'>
           <Header/>
           <Outlet/>
          <Footer/>
    </div>
  )
}

export default RootPage
