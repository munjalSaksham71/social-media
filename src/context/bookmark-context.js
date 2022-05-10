import { createContext, useContext, useReducer } from "react";
import { bookmarkInitialState, bookmarkReducer } from "../reducer/bookmarkReducer";

const BookmarkContext = createContext();

const useBookmarks = () => useContext(BookmarkContext);

const BookmarkContextProvider = ({ children }) => {
  const [bookmarkState, bookmarkDispatch] = useReducer(
    bookmarkReducer,
    bookmarkInitialState
  );
  return (
    <BookmarkContext.Provider value={{bookmarkState, bookmarkDispatch}}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { useBookmarks, BookmarkContextProvider };
