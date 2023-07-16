import { createContext,useState } from "react";

export const authContext = createContext()

function AuthContextProvider(prop){
      const [name,setName] = useState("")
      const [isauth,setAuth] = useState(false)
     
       const setNameto = (prop)=>{
              setName(prop)
       }

       const Loginto=()=>{    
          setAuth(true)
       }
       const logoutTo=()=>{
           setAuth(false)
       }
    

    return (
        <authContext.Provider value={{name,setNameto,Loginto,logoutTo,isauth}}>{prop.children}</authContext.Provider>
     )     
}



export default AuthContextProvider