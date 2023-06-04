import { createContext, useReducer } from "react";

export const LoginContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      throw new Error();
  }
}

function LoginProvider({ children }) {
  const localuser = localStorage.getItem("authorization , roles")
    ? JSON.parse(localStorage.getItem("authorization , roles"))
    : false;

  const [state, dispatch] = useReducer(reducer, localuser);
  const userLog = {
    islogin: state,
    login: () => dispatch({ type: "login" }),
    logout: () => dispatch({ type: "logout" }),
  };
  return (
    <LoginContext.Provider value={userLog}>{children}</LoginContext.Provider>
  );
}
export default LoginProvider;
