
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
        <div className="flex flex-col items-start ml-8">
            <h2 className=" flex justify-center items-center align-middle w-full text-[25px] font-semibold leading-5">Shop Page</h2>
            {
                mapItems.map(item => (
                    <Category key={item.id} items={item} />
                ))}
        </div>
    )
}

export default ShopPage