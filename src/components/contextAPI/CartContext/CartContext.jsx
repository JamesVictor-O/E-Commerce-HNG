import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth,db } from "../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productTotal, setProductTotal] = useState();
  const [currentUser, setCurrentUser] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(true);
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const unSubscribeSnapshot = onSnapshot(userRef, doc => {
          setCartItems(doc.data().cartItems)
          setUserId(user.uid)
        })
        return () => unSubscribeSnapshot() 
      } else {
        setCartItems({})
      }
    });

    return ()=> unSubscribe()
  }, []);
  const value = {
    cartItems,
    setCartItems,
    productTotal,
    setProductTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
