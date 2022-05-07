import { createContext, useContext, useReducer } from "react";
import { followerInitialState, followReducer } from "../reducer/followReducer";

const FollowerContext = createContext();

const useFollower = () => useContext(FollowerContext);

const FollowerContextProvider = ({ children }) => {
  const [followState, followDispatch] = useReducer(
    followReducer,
    followerInitialState
  );
  return (
    <FollowerContext.Provider value={{followState, followDispatch}}>
      {children}
    </FollowerContext.Provider>
  );
};

export { useFollower, FollowerContextProvider };
