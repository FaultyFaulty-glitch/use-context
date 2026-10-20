import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
    const [storeLogin, updateLogin] = useState([])
    console.log(storeLogin);
    return (
        <LoginContext.Provider value={{storeLogin, updateLogin}}>
            {children}
        </LoginContext.Provider>
    )
    }

export default LoginProvider;
