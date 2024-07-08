import { useState } from 'react'
import './index.css'
import RootPage from './Root'
import CartItem from './components/cartItems/CartItem'
import ShoppingPage from './page/shopingPage/shoppingPage'
import CheckoutPage from './page/checkoutPage/CheckoutPage'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
function App() {
      const router=createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<RootPage/>}>
              <Route index element={<ShoppingPage/>}/>
              <Route path='cartItem' element={<CartItem/>}/>
              <Route path='checkout' element={<CheckoutPage/>}/>
             </Route>
          )
      )
  return (
    <div className='bg-[#FAFFFF] w-max-[1318.7px] '>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App