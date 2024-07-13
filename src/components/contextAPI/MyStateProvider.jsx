import { createContext,useState,useEffect } from "react"

  export const myStates= createContext(null)
const MyStateProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([])
     const [popUp, setPopUp]=useState(false)
     const [products, setProducts]=useState([])
     const [productTotal, setProductTotal]=useState()
     const [delivery,setDelivery]=useState(1000)


    useEffect(() => {
      const apiKey="9b64558aae124747b4097f3966414d6a20240712143239551922"
      // const url=`/api/products?organization_id=763700ddc9a04c94a7ee32f444ad7b90&reverse_sort=false&page=1&size=10&Appid=WTFTGI54VWY5ESS&Apikey=${apiKey}`
      const url=`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=763700ddc9a04c94a7ee32f444ad7b90&reverse_sort=false&page=1&size=10&Appid=WTFTGI54VWY5ESS&Apikey=${apiKey}`
      fetch(url)
          .then(reponse => reponse.json()).then(data =>  {
            return setProducts(data.items)
          }).catch(err => console.log(err))
          console.log(products)
          
    }, [])
    const value={       
        cartItems,
        setCartItems,
        setPopUp,
        popUp,
        products,
        setProducts,
        productTotal,
        setProductTotal,
        delivery
    }
  return (
    <myStates.Provider value={value}>{children}</myStates.Provider>
  )
}

export default MyStateProvider
