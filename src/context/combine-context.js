import { AuthContextProvider } from "./auth-context";
import { PostContextProvider } from "./posts-context";

const CombineContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <PostContextProvider>{children}</PostContextProvider>
    </AuthContextProvider>
  );
};

export default CombineContext;
