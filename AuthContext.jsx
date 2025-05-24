import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext();
 const AuthProvider = ({children}) => {
    const[isAuthenticated,setIsAuthenticated]=useState(false)
    const Login=()=>setIsAuthenticated(true);
  return (
    <AuthContext.Provider value={{isAuthenticated,Login}}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext);
//export default AuthContext
export default AuthProvider 