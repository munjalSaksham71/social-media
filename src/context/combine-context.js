import { AuthContextProvider } from "./auth-context";
import { BookmarkContextProvider } from "./bookmark-context";
import { FilterContextProvider } from "./filter-context";
import { FollowerContextProvider } from "./follower-context";
import { CommentContextProvider } from "./postComments-context";
import { PostContextProvider } from "./posts-context";

const CombineContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <FollowerContextProvider>
          <BookmarkContextProvider>
            <CommentContextProvider>
              <FilterContextProvider>{children}</FilterContextProvider>
            </CommentContextProvider>
          </BookmarkContextProvider>
        </FollowerContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default CombineContext;
