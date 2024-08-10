import React, { createContext, useEffect, useState } from 'react'


 export const ProductContext =createContext(null)
export const ProductProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState({});
    const [products, setProducts] = useState([])

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
        products,
        setProducts,
        shopItems,
        setShopItems
    }
  return (
      <ProductContext.Provider value={value}>
          {children}
    </ProductContext.Provider>
  )
}

