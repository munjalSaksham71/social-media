import { createContext, useContext, useReducer, useState } from 'react'
import { postsinitialState, postsReducer } from '../reducer/postsReducer';

const PostContext = createContext();

const usePosts = () => useContext(PostContext);

const PostContextProvider = ({children}) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [postState, postDispatch] = useReducer(postsReducer, postsinitialState)
    return <PostContext.Provider value={{isModelOpen, setIsModelOpen, postState, postDispatch}}>{children}</PostContext.Provider>
}

export {usePosts, PostContextProvider}