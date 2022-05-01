import { createContext, useContext, useState } from "react";
import { login, signup } from "../actions/authActions";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const userToken = localStorage.getItem("user_token");

const AuthContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userToken ? true : false);
  const [user, setUser] = useState(userToken);

  const loginUser = async (username, password) => {
    const { data, status } =  await login(username, password);
    if (status === 200) {
      localStorage.setItem("user_token", JSON.stringify(data.encodedToken));
      setUser(data.encodedToken);
      setIsUserLoggedIn(true);
    }
  };

  const signupUser = async (username, password, firstName, lastName) => {
    const { data } = await signup(username, password, firstName, lastName);
      localStorage.setItem("user_token", JSON.stringify(data.encodedToken));
      setUser(data.encodedToken);
      setIsUserLoggedIn(true);
  }

  const logoutUser = async () => {
    localStorage.removeItem("user_token");
    setIsUserLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, isUserLoggedIn, loginUser, signupUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthContextProvider };