
import { useContext } from "react"
import { myStates } from "../../components/contextAPI/MyStateProvider"
import Category from "../../components/shop-Component/Category"

const ShopPage = () => {
    const { shopItems } = useContext(myStates)

    // converting objects of objects to array of objects
    const mapItems = Object.keys(shopItems).map(key => {
         return shopItems[key]
    })
    
    return (
        <div className="flex flex-col items-start md:ml-8 m-2 mt-8">
            <h2 className="hidden md:flex justify-center items-center align-middle w-full text-[50px] font-medium leading-5 mb-4 font-thin">Shop Page</h2>
            {
                mapItems.map(item => (
                    <Category key={item.id} items={item} />
                ))}
        </div>
    )
}

export default ShopPage