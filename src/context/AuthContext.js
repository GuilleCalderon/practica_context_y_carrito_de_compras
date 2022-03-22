import { createContext, useState } from "react";

const initialAuth = null;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    } //es una simple simulacionn!!
  };
  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
