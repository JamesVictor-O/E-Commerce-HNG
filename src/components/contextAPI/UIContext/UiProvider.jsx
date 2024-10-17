import { createContext,  useState } from "react";


export const UIcontext = createContext(null)

export const UIprovider = ({ children }) => {
    const [popUp, setPopUp]=useState(false)
    const [displayItemID, setDisplayitemId] = useState(0)
    const [delivery, setDelivery] = useState(4);
    const [isLoggedIn, setIsLoggedIn]=useState(false)

     
    const value = {
        delivery,
        displayItemID,
        setDisplayitemId,
        setPopUp,
        popUp,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <UIcontext.Provider value={value}>
            {children}
        </UIcontext.Provider>
    )
}