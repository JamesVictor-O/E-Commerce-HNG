import { createContext,useState,useEffect } from "react"

  export const myStates= createContext(null)
const MyStateProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([])
     const [popUp, setPopUp]=useState(false)
     const [displayItemID,setDisplayitemId]=useState(0)
     const [products, setProducts]=useState([])
     const [productTotal, setProductTotal]=useState()
     const [shopItems, setShopItems] = useState({});
     const [delivery, setDelivery] = useState(4);

     useEffect(() => {
       // const apiKey="9b64558aae124747b4097f3966414d6a20240712143239551922"

       // const url=`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=763700ddc9a04c94a7ee32f444ad7b90&reverse_sort=false&page=1&size=10&Appid=WTFTGI54VWY5ESS&Apikey=${apiKey}`
       const url = "/shopData.json";

       const fetchdata = async () => {
         try {
           const respons = await fetch(url);
           const data = await respons.json();
           const allItems = Object.values(data).flatMap(
             (category) => category.items
           );
           setShopItems(data);
           setProducts(allItems);
         } catch (erro) {
           console.log(erro);
         }
       };

       fetchdata();
     }, []);
     const value = {
       cartItems,
       setCartItems,
       setPopUp,
       popUp,
       products,
       setProducts,
       productTotal,
       setProductTotal,
       delivery,
       displayItemID,
       setDisplayitemId,
       shopItems
     };
  return (
    <myStates.Provider value={value}>{children}</myStates.Provider>
  )
}

export default MyStateProvider
