import React from 'react'
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import AvailableStock from './components/AvailableStock/AvailableStock'
const RootPage = () => {
  return (
    <div className='p-4 relative'>
        <Header/>
         
         <AvailableStock/>
    </div>
  )
}

export default RootPage
