import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function CalculateTotal(product) {
  return product
    .map((product) => product.price * product.available_quantity)
    .reduce((acc, price) => acc + price, 0);
}
// updating cart items
export function HandleAddItemToCart(
  cartItems,
  name,
  imageUrl,
  current_price,
  id,
) {
  const product_Exist = cartItems.find((product) => product.id === id);
  if (product_Exist) {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, available_quantity: cartItem.available_quantity + 1 }
        : cartItem
    );
    return updatedCart;
  } else {
     const newItem = { name, imageUrl, price: current_price, id, available_quantity: 1 };
     const updatedCart=[...cartItems,newItem]
     return updatedCart;
  }

     
}

// validating sign up input boxs
export const validate = (details) => {
  
  const error = {};
  if (!details.displayName.trim()) {
    error.displayName = "please provide a display name";
  }

  if (!details.email) {
    error.email = "please provide an email";
  } else if (!/\S+@\S+\.\S+/.test(details.email)) {
    error.email = "incorrect email address";
  }

  if (!details.password) {
    error.password = "please provide a secure password";
  } else if (details.password.length < 5) {
    error.password = "password must be greater than six digests";
  }

  // if (!details.confirmPassword) {
  //   error.confirmPassword="input password to confirm"
  // } else if (details.confirmPassword !== details.password) {
  //   error.confirmPassword="password those not match!!"
  // }

  return error;
};

// updating cartitems on firebase firestore

export const updateItemsOnFirebase =async (updatedCartItems,userId) => {
     try {
          const useRef = doc(db, "users", userId);
          await updateDoc(useRef, {
              cartItems:updatedCartItems
          })
          console.log("cart items Successfully updated")
      } catch (error) {
          console.log(error)
      }
}