import { useState } from 'react'
import './index.css'
import RootPage from './Root'
import CartItem from './components/cartItems/CartItem'
import ShoppingPage from './page/shopingPage/shoppingPage'
import CheckoutPage from './page/checkoutPage/CheckoutPage'
import PaymentGateWay from './page/paymentPage/PaymentGateWay'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import MyStateProvider from './components/contextAPI/MyStateProvider'
function App() {
      const router=createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<RootPage/>}>
              <Route index element={<ShoppingPage/>}/>
              <Route path='cartItem' element={<CartItem/>}/>
              <Route path='checkout' element={<CheckoutPage/>}/>
              <Route path='payment' element={<PaymentGateWay/>}/>
            </Route>
          )
      )
  return (
    <div className='bg-[#FAFFFF] w-max-[1318.7px] md:min-h-full'>
      <MyStateProvider>
        <RouterProvider router={router}/>
      </MyStateProvider>
       
    </div>
  )
}

export default App