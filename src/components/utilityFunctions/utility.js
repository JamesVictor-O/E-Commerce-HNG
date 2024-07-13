export function CalculateTotal(product){
     return product.map(product => product.price * product.available_quantity)
     .reduce((acc,price)=> acc + price,0)
}
      
export function HandleAddItemToCart(cartItems,name,imageUrl,current_price,id,available_quantity,setCartItems){
     const product_Exist=cartItems.find(product=> product.id === id);
     if(product_Exist){
          const updatedCart= cartItems.map(cartItem =>
               cartItem.id === id? 
               {...cartItem,  available_quantity:cartItem.available_quantity + 1}
               : cartItem
               )
     setCartItems(updatedCart)
     }else{
               setCartItems([
                    ...cartItems,
                    {
                         name,
                         imageUrl,
                         price:current_price,
                         id,
                         available_quantity
                    }
               ])
          }
 }

