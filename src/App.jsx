import { useState } from 'react'
import './index.css'
import RootPage from './Root'
import CartItem from './components/cartItems/CartItem'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
function App() {
      const router=createBrowserRouter(
          createRoutesFromElements(
            <Route>
              <Route path='/' element={<RootPage/>}/>
               <Route path='cartItem' element={<CartItem/>}/>
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