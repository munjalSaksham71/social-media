export const postsinitialState = {
    posts: []
}

export const postsReducer = (state, action) => {
    switch(action.type){
        case 'GET_POSTS':
            return {...state, posts: action.payload};
        case 'CREATE_POST': 
            return {...state, posts: action.payload};
        case 'DELETE_POST':
            return {...state, posts: action.payload};
        default:
            return {...state}
    }
}