import React from 'react'
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import AvailableStock from './components/AvailableStock/AvailableStock'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const RootPage = () => {
  return (
    <div className='relative no-scrollbar'>
         <div className='p-4'>
           <Header/>
         </div>
         <div className='p-4'>
           <Outlet/>
         </div>
          <div>
              <Footer/>
          </div>
    </div>
  )
}

export default RootPage
