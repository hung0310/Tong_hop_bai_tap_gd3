import { createStore, combineReducers } from "redux";

import { searchReducer } from '../reducers/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer,
})

const store = createStore(rootReducer);

export default store;