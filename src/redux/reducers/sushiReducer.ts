const initialState = {
    items: [],
    isLoaded: false
}

const sushiReducer = (state = initialState, action: { type: string; payload: string }) => {
    if ( action.type === 'SET_SUSHI') {
        return {
            ...state,
            items: action.payload
        }
    }
    return state
}

export default sushiReducer

