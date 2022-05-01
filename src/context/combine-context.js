import { AuthContextProvider } from "./auth-context";

const CombineContext = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default CombineContext;
