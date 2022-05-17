import { createContext, useContext, useReducer } from "react";
import { commentsReducer } from "../reducer/commentsReducer";


const CommentContext = createContext();

const useComments = () => useContext(CommentContext);

const CommentContextProvider = ({children}) => {

    const [commentsState, commentsDispatch] = useReducer(commentsReducer, {
        comments: []
    })

    return <CommentContext.Provider value={{commentsState, commentsDispatch}}>{children}</CommentContext.Provider>
}

export {useComments, CommentContextProvider}