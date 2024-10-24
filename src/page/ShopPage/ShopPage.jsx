
import { useContext } from "react"
import { ProductContext } from "../../components/contextAPI/ProductContext/ProductContext"
import Category from "../../components/shop-Component/Category"
import { ToastContainer } from "react-toastify"


const ShopPage = () => {
    const { shopItems} = useContext(ProductContext)
    
    return (
        <div className=" w-full h-full flex flex-col items-start md:ml-8 m-2 mt-32">
            <h2 className="hidden md:flex justify-center items-center align-middle w-full text-[50px] font-medium leading-5 mb-4 ">Shop Page</h2>
            {
                Object.keys(shopItems).map(key => {
                    return shopItems[key]
               }).map(item => (
                    <Category key={item.id} items={item}/>
                ))}

                <ToastContainer/>
        </div>
    )
}

export default ShopPage