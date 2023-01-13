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
        case 'INCREMENT':
            const pagesIncrement = state.page + 1 >= state.nbPages ? 0 : state.page + 1;
            return {
                ...state,
                page: pagesIncrement
            }
        case 'DECREMENT':
            const pagesChange = state.page <= 0 ? 0 : state.page - 1;
            return {
                ...state,
                page: pagesChange
            }
        default:
            return state;
    }
}