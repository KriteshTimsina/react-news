export function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_STORIES':
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }


        case 'SET_SEARCH':
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}