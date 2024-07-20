import React from 'react'
import Advert from '../../components/Advert/Advert'
import AvailableStock from '../../components/AvailableStock/AvailableStock'

const ShoppingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
       <Advert/>
       <AvailableStock/>
    </div>
  )
}

export default ShoppingPage
