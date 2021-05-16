import { combineReducers } from 'redux'
import filtersReducer from './filtersReducer'
import sushiReducer from './cartReducer'

const rootReducer = combineReducers({
    filtersReducer,
    sushiReducer
})

export default rootReducer