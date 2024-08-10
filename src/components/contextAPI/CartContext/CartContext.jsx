import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cartItems,setCartItems]=useState([])
     const [productTotal, setProductTotal]=useState()
    
    
     const value = {
       cartItems,
       setCartItems,
       productTotal,
       setProductTotal,
     };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
