export const commentsReducer = (state,action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
        case 'ADD_TO_COMMENTS':
        case 'REMOVE_FROM_COMMENTS':
        case 'ADD_TO_LIKED': 
        case 'REMOVE_FROM_LIKED':
            return {...state, comments: action.payload};
        default:
            state;
    }
}