import React from 'react'
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import AvailableStock from './components/AvailableStock/AvailableStock'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const RootPage = () => {
  return (
    <div className='p-4 relative no-scrollbar'>
         <Header/>
         <div>
           <Outlet/>
         </div>
          <div>
              {/* <Footer/> */}
          </div>
    </div>
  )
}

export default RootPage
