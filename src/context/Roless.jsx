import { createContext, useContext, useState,useEffect } from "react";
export const AuthContext = createContext();



export const Provideroles2 = ({ children }) => {
    const [first, setFirst] = useState(undefined)
    const [profile, setProfile] = useState(undefined);
    
    
    const value = {
        first,
        setFirst,
    }
    localStorage.setItem('authorization , roles' , JSON.stringify(value))



    useEffect(() => {
        const data = localStorage.getItem('authorization , roles');
        if ( data !== null ) setFirst(JSON.parse(data));
      }, []);

//     const localUser = 
//     localStorage.setItem("authorization , roles" , JSON.stringify(value))?
//     JSON.parse(localStorage.getItem("authorization , roles" , JSON.stringify(value))
// )
// :
// false











return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export default AuthContext;



export const useAuth = () =>{
    const context = useContext(AuthContext);
    return context
}
