import { AuthContextProvider } from "./auth-context";
import { BookmarkContextProvider } from "./bookmark-context";
import { FollowerContextProvider } from "./follower-context";
import { PostContextProvider } from "./posts-context";

const CombineContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <FollowerContextProvider>
          <BookmarkContextProvider>{children}</BookmarkContextProvider>
        </FollowerContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default CombineContext;
