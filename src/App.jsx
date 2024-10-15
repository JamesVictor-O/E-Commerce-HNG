import { useState } from 'react'
import './index.css'
import RootPage from './Root'
import CartItem from './components/cartItems/CartItem'
import ShoppingPage from './page/shopingPage/shoppingPage'
import CheckoutPage from './page/checkoutPage/CheckoutPage'
import PaymentGateWay from './page/paymentPage/PaymentGateWay'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import MyStateProvider from './components/contextAPI/MyStateProvider'
import SignUpPage from './page/SignUpLoginPage/SignUpPage/SignUpPage'
import LoginPage from './page/SignUpLoginPage/LoginPage/LoginPage'
import ShopPage from './page/ShopPage/ShopPage'




function App() {
      const router=createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<RootPage/>}>
              <Route index element={<ShoppingPage/>}/>
              <Route path='cartItem' element={<CartItem />} />
              <Route path='/shop' element={<ShopPage/>}/>
              <Route path='checkout' element={<CheckoutPage/>}/>
              <Route path='payment' element={<PaymentGateWay/>}/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='signup' element={<SignUpPage/>}/>
            </Route>
          )
      )
  return (
    <div>
      <MyStateProvider>
        <RouterProvider router={router}/>
      </MyStateProvider>
       
    </div>
  )
}

export default App