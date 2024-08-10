import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";

export const UIcontext = createContext(null)

export const UIprovider = ({ children }) => {
    const [popUp, setPopUp]=useState(false)
    const [displayItemID, setDisplayitemId] = useState(0)
    const [delivery, setDelivery] = useState(4);
    const [currentUser,setCurrentUser]=useState(null)


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
           setCurrentUser(user)
       })
   },[])
     
    const value = {
        delivery,
        displayItemID,
        setDisplayitemId,
        setPopUp,
        popUp,
        currentUser
    }
    return (
        <UIcontext.Provider value={value}>
            {children}
        </UIcontext.Provider>
    )
}