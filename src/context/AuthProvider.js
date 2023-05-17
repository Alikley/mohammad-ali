import { createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
  const [auth, setAuth] = useState(Cookies.get("authorizatiom"));
  const [profile, setProfile] = useState(null);

  const value = {
    auth,
    setAuth: (value) => {
      setAuth(value);
      Cookies.set("authorization", value, { expires: 1 });
    },
    profile,
    setProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

/**
 * setToken from localstorage
 */
