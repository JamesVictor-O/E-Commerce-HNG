import { createContext,useState } from "react"

  export const myStates= createContext(null)
const MyStateProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([])
     const [popUp, setPopUp]=useState(false)

    const value={       
        cartItems,
        setCartItems,
        setPopUp,
        popUp
    }
  return (
    <myStates.Provider value={value}>{children}</myStates.Provider>
  )
}

export default MyStateProvider
