// auth.js
import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const islog = useSelector((state) => state.cart.isAuthenticated);
  const dispatch = useDispatch();
  const [role,Setrole] =useState();
  return (
    <AuthContext.Provider value={{role,Setrole}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;