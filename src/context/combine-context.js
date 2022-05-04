import { AuthContextProvider } from "./auth-context";
import { FollowerContextProvider } from "./follower-context";
import { PostContextProvider } from "./posts-context";

const CombineContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <FollowerContextProvider>{children}</FollowerContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default CombineContext;
